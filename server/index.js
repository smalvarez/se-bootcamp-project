// server/index.js

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); // Ensure you can handle JSON payloads

app.post("/signup", (req, res) => {
  // Your signup logic here
  res.send("Signup successful");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
