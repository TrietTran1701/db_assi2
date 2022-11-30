const sqlQuery = {
  registerUser: "INSERT INTO USER (userID, username, password) VALUES",
  getManagerUser: "SELECT * FROM USER WHERE username='Manager'",
};

module.exports = sqlQuery;
