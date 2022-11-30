const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const sqlQuery = require("./sqlQueryHelper");
const cors = require("cors");
var db = require("./database");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Register Manager user
// @route: /api/user/register
// @type: PUT
app.put("/api/user/register", (req, res) => {
  let query = sqlQuery.registerUser;
  const userInfo = {
    userID: 0,
    username: "Manager",
    password: "root",
  };
  query += ` (${userInfo.userID}, "${userInfo.username}", "${userInfo.password}")`;

  try {
    db.query(query);
    res.send(query);
  } catch (error) {
    console.log(error);
  }
});

// Get Manager user
// @route: /api/user/
// @type: GET

app.get("/api/user", (req, res) => {
  let query = sqlQuery.getManagerUser;
  try {
    db.query(query, (err, result) => {
      const response = result[0];
      res.send({
        data: response,
      });
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {});
app.listen(3001, () => {
  console.log("running on port 3001");
  db.connect(function (err) {
    if (err) throw err;
    console.log("Database connected");
  });
});
