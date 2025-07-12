require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo_db",
});

module.exports = connection;
