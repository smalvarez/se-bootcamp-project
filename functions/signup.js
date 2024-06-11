// netlify/functions/signup.js
const mysql = require("mysql");
const bodyParser = require("body-parser");
const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: "your-hostinger-database-host",
  user: "u688440464_sqladmin",
  password: "Dbpassword9!",
  database: "u688440464_login_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to the database.");
  }
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  const query = "INSERT INTO users (email, password) VALUES (?, ?)";
  db.query(query, [email, password], (err, result) => {
    if (err) {
      res.status(500).send({ message: "Database error", error: err });
    } else {
      res.status(200).send({ message: "User registered successfully" });
    }
  });
});

module.exports.handler = serverless(app);
