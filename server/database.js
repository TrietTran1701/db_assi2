var mysql = require("mysql");

var db = mysql.createPool({
  host: "localhost",
  database: "test_2",
  user: "root",
  password: "yasus462001",
});

module.exports = db;
