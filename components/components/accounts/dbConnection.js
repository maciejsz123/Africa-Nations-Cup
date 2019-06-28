let mysql = require('mysql');

let con = mysql.createConnection({
  host: 'localhost',
  password: '',
  user: 'root',
  port: '3306',
  database: 'mydb',
});

con.connect(function(err) {
  if(err) return err;
  console.log("connected succesfully");
});

module.exports = con;
