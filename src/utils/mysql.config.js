var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost", //127.0.0.1:3306
  user: "root",
  password: "123456" 
});

// var con = mysql.createConnection({
//   host: "localhost", //127.0.0.1:3307
//   user: "pap",
//   password: "12345" 
// });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});