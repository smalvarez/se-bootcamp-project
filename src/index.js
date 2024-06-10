const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool, Client } = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;
const dbName = "login_db";
const sqlFilePath = "login_table.sql";

// Initial connection details
const initialClient = new Client({
  user: "postgres",
  host: "localhost",
  password: "dbpassword!",
  port: 5432,
});

// Connect initial client
initialClient.connect();

// Function to execute SQL file
function executeSqlFile(client, filePath) {
  const sql = fs.readFileSync(filePath).toString();
  client.query(sql, (err, res) => {
    if (err) {
      console.error("Error executing SQL file: ", err.stack);
    } else {
      console.log("SQL file executed successfully");
    }
    client.end((endErr) => {
      if (endErr) {
        console.error("Error closing connection: ", endErr.stack);
      }
      // Exit the process once the SQL execution is complete and the connection is closed
      process.exit();
    });
  });
}

// Check if the database exists and create it if it doesn't
initialClient.query(
  `SELECT 1 FROM pg_database WHERE datname='${dbName}'`,
  (err, res) => {
    if (err) {
      console.error("Error checking database existence: ", err.stack);
      initialClient.end(() => process.exit());
      return;
    }

    if (res.rows.length === 0) {
      // Database does not exist, create it
      initialClient.query(
        `CREATE DATABASE ${dbName}`,
        (createErr, createRes) => {
          if (createErr) {
            console.error("Error creating database: ", createErr.stack);
            initialClient.end(() => process.exit());
          } else {
            console.log(`Database ${dbName} created successfully`);

            // Connect to the new database and execute the SQL file
            const newClient = new Client({
              user: "postgres",
              host: "localhost",
              password: "dbpassword!",
              port: 5432,
              database: dbName,
            });

            newClient.connect((connectErr) => {
              if (connectErr) {
                console.error(
                  "Error connecting to new database: ",
                  connectErr.stack
                );
                process.exit();
              } else {
                executeSqlFile(newClient, sqlFilePath);
              }
            });
          }
        }
      );
    } else {
      console.log(`Database ${dbName} already exists`);

      // Connect to the existing database and execute the SQL file
      const existingClient = new Client({
        user: "postgres",
        host: "localhost",
        password: "dbpassword!",
        port: 5432,
        database: dbName,
      });

      existingClient.connect((connectErr) => {
        if (connectErr) {
          console.error(
            "Error connecting to existing database: ",
            connectErr.stack
          );
          process.exit();
        } else {
          executeSqlFile(existingClient, sqlFilePath);
        }
      });

      initialClient.end();
    }
  }
);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(cors());
app.use(bodyParser.json());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM login_table WHERE email = $1",
      [email]
    );
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
