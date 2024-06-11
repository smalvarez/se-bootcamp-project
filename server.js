require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");

const app = express();

const dbConfig = {
  host: process.env.DB_HOST,
  port: 3306, // Default port for MySQL
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectTimeout: 10000, // 10 seconds
  acquireTimeout: 10000, // 10 seconds
  timeout: 10000, // 10 seconds
  reconnect: true,
};

const pool = mysql.createPool(dbConfig);

app.use(bodyParser.json());
app.use(cors());

const secretKey = process.env.SECRET_KEY;

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
          res
            .status(500)
            .json({
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
    res
      .status(500)
      .json({
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
        res
          .status(500)
          .json({
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
    res
      .status(500)
      .json({
        message: "An unexpected error occurred. Please try again.",
        error: err.message,
        stack: err.stack,
      });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res
    .status(500)
    .json({
      message: "An unexpected error occurred. Please try again.",
      error: err.message,
      stack: err.stack,
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
