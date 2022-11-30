const express = require("express");
const { threadId } = require("./database");
const app = express();
var db = require("./database");

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO EMPLOYEE (employeeID,fullname,address) VALUES (1,'test_name','test_add');";
  db.query(sqlInsert, (err, result) => {
    res.send("hello");
  });
});
app.listen(3001, () => {
  console.log("running on port 3001");
  // connection.connect(function (err) {
  //   if (err) throw err;
  //   console.log("Database connected");
  // });
});
