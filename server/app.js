const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const fs = require("fs");

const app = express();

// Database Configuration
const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectTimeout: 10000,
  acquireTimeout: 10000,
  timeout: 10000,
  reconnect: true,
};

const pool = mysql.createPool(dbConfig);

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1); // Exit with an error code
  }
  if (connection) connection.release();
  console.log("Database connected successfully.");

  // Run the login.sql script
  const sqlFilePath = path.join(__dirname, "login.sql");
  runSqlScript(sqlFilePath, pool);
});

app.use(bodyParser.json());

// CORS Configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

const secretKey = process.env.SECRET_KEY;

// Function to run the SQL script
const runSqlScript = (filePath, pool) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading SQL file:", err);
      process.exit(1); // Exit with an error code
    }

    pool.query(data, (error, results) => {
      if (error) {
        console.error("Error executing SQL script:", error);
        process.exit(1); // Exit with an error code
      } else {
        console.log("SQL script executed successfully");
      }
    });
  });
};

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const query =
      "INSERT INTO login_table (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";

    pool.query(
      query,
      [firstName, lastName, email, hashedPassword],
      (error, results) => {
        if (error) {
          console.error("Error during the sign-up process:", error);
          res.status(500).json({
            message: "An error occurred. Please try again.",
            error: error.message,
            stack: error.stack,
          });
        } else {
          res.status(201).json({ id: results.insertId });
        }
      }
    );
  } catch (err) {
    console.error("Unexpected error during sign-up:", err);
    res.status(500).json({
      message: "An unexpected error occurred. Please try again.",
      error: err.message,
      stack: err.stack,
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const query = "SELECT * FROM login_table WHERE email = ?";

    pool.query(query, [email], async (error, results) => {
      if (error) {
        console.error("Error during the login process:", error);
        res.status(500).json({
          message: "An error occurred. Please try again.",
          error: error.message,
          stack: error.stack,
        });
      } else if (results.length === 0) {
        res.status(401).json({ message: "Invalid email or password." });
      } else {
        const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          res.status(401).json({ message: "Invalid email or password." });
        } else {
          const token = jwt.sign({ id: user.id }, secretKey, {
            expiresIn: "1h",
          });
          res.json({ token });
        }
      }
    });
  } catch (err) {
    console.error("Unexpected error during login:", err);
    res.status(500).json({
      message: "An unexpected error occurred. Please try again.",
      error: err.message,
      stack: err.stack,
    });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../build")));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    message: "An unexpected error occurred. Please try again.",
    error: err.message,
    stack: err.stack,
  });
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
