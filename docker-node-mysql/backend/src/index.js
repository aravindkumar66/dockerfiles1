// const express = require("express");
// const mysql = require("mysql2");

// const app = express();
// const port = process.env.PORT || 3000;

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// app.get("/", (req, res) => {
//   res.send("Docker Node API is running 🚀");
// });

// app.get("/db", (req, res) => {
//   db.query("SELECT NOW() AS time", (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.json(result);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 3000;

function connectWithRetry() {
  const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  db.connect(err => {
    if (err) {
      console.error("MySQL not ready, retrying in 5s...", err.message);
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log("Connected to MySQL ✅");
    }
  });

  return db;
}

const db = connectWithRetry();

app.get("/", (req, res) => {
  res.send("Docker Node API is running 🚀");
});

app.get("/db", (req, res) => {
  db.query("SELECT NOW() AS time", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

