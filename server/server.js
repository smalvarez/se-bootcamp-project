import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const { Pool, Client } = pkg;
const app = express();
const port = process.env.SERVER_PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_NAME:", process.env.DB_NAME);

async function ensureDatabaseAndTable() {
  const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "postgres",
  });

  await client.connect();

  try {
    const dbCheck = await client.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [process.env.DB_NAME]
    );

    if (dbCheck.rowCount === 0) {
      await client.query(`CREATE DATABASE ${process.env.DB_NAME}`);
      console.log(`Database ${process.env.DB_NAME} created.`);
    } else {
      console.log(`Database ${process.env.DB_NAME} already exists.`);
    }

    await client.end();

    const userClient = new Client({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    await userClient.connect();

    const tableCheck = await userClient.query(
      `SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'login_table'`
    );

    if (tableCheck.rowCount === 0) {
      await userClient.query(`
        CREATE TABLE IF NOT EXISTS login_table (
          id SERIAL PRIMARY KEY,
          first_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      console.log(`Table 'login_table' created.`);
    } else {
      console.log(`Table 'login_table' already exists.`);
    }

    await userClient.end();
  } catch (err) {
    console.error("Error ensuring database/table:", err.stack);
  }
}

ensureDatabaseAndTable().then(() => {
  const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  pool.connect((err) => {
    if (err) {
      console.error("Error connecting to database:", err.stack);
      return;
    }
    console.log("Connected to PostgreSQL database.");
  });

  const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.sendStatus(401);

    jwt.verify(token.split(" ")[1], process.env.SECRET_KEY, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };

  app.post("/signup", async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    try {
      const checkEmailQuery = "SELECT * FROM login_table WHERE email = $1";
      const checkEmailResult = await pool.query(checkEmailQuery, [email]);

      if (checkEmailResult.rows.length > 0) {
        return res.status(409).json({ message: "Email already exists." });
      }

      const saltRounds = parseInt(process.env.BCRYPT_COST_FACTOR) || 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const insertQuery =
        "INSERT INTO login_table (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)";
      await pool.query(insertQuery, [
        first_name,
        last_name,
        email,
        hashedPassword,
      ]);

      res.status(200).json({ message: "Signup successful." });
    } catch (err) {
      console.error("Error signing up:", err.stack);
      res.status(500).json({ message: "Error signing up." });
    }
  });

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
      const query = "SELECT password FROM login_table WHERE email = $1";
      const result = await pool.query(query, [email]);

      if (result.rows.length === 0) {
        res.status(400).json({ message: "User not found." });
        return;
      }

      const storedPassword = result.rows[0].password;
      const passwordMatch = await bcrypt.compare(password, storedPassword);

      if (passwordMatch) {
        const token = jwt.sign({ email }, process.env.SECRET_KEY, {
          expiresIn: "1h",
        });
        res.status(200).json({ message: "Login successful.", token });
      } else {
        res.status(401).json({ message: "Incorrect password." });
      }
    } catch (err) {
      console.error("Error querying database:", err.stack);
      res.status(500).json({ message: "Error logging in." });
    }
  });

  app.get("/api/getProfile", authenticateToken, async (req, res) => {
    try {
      const { email } = req.user;
      const result = await pool.query(
        "SELECT first_name, last_name, email FROM login_table WHERE email = $1",
        [email]
      );

      if (result.rows.length > 0) {
        res.json(result.rows[0]);
      } else {
        res.status(404).json({ message: "User not found." });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.put("/api/updateEmail", authenticateToken, async (req, res) => {
    const { currentEmail, newEmail } = req.body;

    try {
      const query = "UPDATE login_table SET email = $1 WHERE email = $2";
      await pool.query(query, [newEmail, currentEmail]);

      res.status(200).json({ message: "Email updated successfully." });
    } catch (err) {
      console.error("Error updating email:", err.stack);
      res.status(500).json({ message: "Error updating email." });
    }
  });

  app.put("/api/updatePassword", authenticateToken, async (req, res) => {
    const { email, oldPassword, newPassword } = req.body;

    try {
      const query = "SELECT password FROM login_table WHERE email = $1";
      const result = await pool.query(query, [email]);

      if (result.rows.length === 0) {
        res.status(400).json({ message: "User not found." });
        return;
      }

      const storedPassword = result.rows[0].password;
      const passwordMatch = await bcrypt.compare(oldPassword, storedPassword);

      if (!passwordMatch) {
        res.status(401).json({ message: "Incorrect old password." });
        return;
      }

      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      const updateQuery =
        "UPDATE login_table SET password = $1 WHERE email = $2";
      await pool.query(updateQuery, [hashedNewPassword, email]);

      res.status(200).json({ message: "Password updated successfully." });
    } catch (err) {
      console.error("Error updating password:", err.stack);
      res.status(500).json({ message: "Error updating password." });
    }
  });

  app.put("/api/updateName", authenticateToken, async (req, res) => {
    const { email, firstName, lastName } = req.body;

    try {
      const query =
        "UPDATE login_table SET first_name = $1, last_name = $2 WHERE email = $3";
      await pool.query(query, [firstName, lastName, email]);

      res.status(200).json({ message: "Name updated successfully." });
    } catch (err) {
      console.error("Error updating name:", err.stack);
      res.status(500).json({ message: "Error updating name." });
    }
  });

  app.delete("/api/deleteAccount", authenticateToken, async (req, res) => {
    const { email } = req.body;

    try {
      const query = "DELETE FROM login_table WHERE email = $1";
      await pool.query(query, [email]);

      res.status(200).json({ message: "User deleted successfully." });
    } catch (err) {
      console.error("Error deleting user:", err.stack);
      res.status(500).json({ message: "Error deleting user." });
    }
  });

  app.get("/api/checkEmail", async (req, res) => {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    try {
      const query = "SELECT 1 FROM login_table WHERE email = $1";
      const result = await pool.query(query, [email]);

      if (result.rows.length > 0) {
        return res.status(200).json({ exists: true });
      }

      return res.status(200).json({ exists: false });
    } catch (err) {
      console.error("Error checking email:", err.stack);
      res.status(500).json({ message: "Error checking email." });
    }
  });

  app.get("/users", async (req, res) => {
    try {
      const query = "SELECT id, first_name, last_name, email FROM login_table";
      const result = await pool.query(query);
      res.status(200).json(result.rows);
    } catch (err) {
      console.error("Error retrieving data:", err.stack);
      res.status(500).json({ message: "Error retrieving users." });
    }
  });

  app.get("/users/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const query =
        "SELECT id, first_name, last_name, email FROM login_table WHERE id = $1";
      const result = await pool.query(query, [id]);

      if (result.rows.length === 0) {
        res.status(404).json({ message: "User not found." });
        return;
      }

      res.status(200).json(result.rows[0]);
    } catch (err) {
      console.error("Error retrieving user:", err.stack);
      res.status(500).json({ message: "Error retrieving user." });
    }
  });

  app.put("/users/:id", async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const query =
        "UPDATE login_table SET first_name = $1, last_name = $2, email = $3, password = $4 WHERE id = $5";
      await pool.query(query, [
        first_name,
        last_name,
        email,
        hashedPassword,
        id,
      ]);

      res.status(200).json({ message: "User updated successfully." });
    } catch (err) {
      console.error("Error updating user:", err.stack);
      res.status(500).json({ message: "Error updating user." });
    }
  });

  app.delete("/users/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const query = "DELETE FROM login_table WHERE id = $1";
      await pool.query(query, [id]);

      res.status(200).json({ message: "User deleted successfully." });
    } catch (err) {
      console.error("Error deleting user:", err.stack);
      res.status(500).json({ message: "Error deleting user." });
    }
  });

  const router = express.Router();

  router.get("/getCurrentUser", authenticateToken, async (req, res) => {
    const { email } = req.user;

    try {
      const result = await pool.query(
        "SELECT first_name, last_name, email FROM login_table WHERE email = $1",
        [email]
      );

      if (result.rows.length > 0) {
        res.json(result.rows[0]);
      } else {
        res.status(404).json({ message: "User not found." });
      }
    } catch (err) {
      console.error("Error retrieving user:", err.stack);
      res.status(500).json({ message: "Error retrieving user." });
    }
  });

  app.use("/", router);

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
