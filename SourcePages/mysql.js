var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'platinum1225!',
  database : 'healinglife'
});
 
connection.connect();
 
connection.query('SELECT * FROM author', function (error, results, fields) {
  if (error) {
      console.log(error);
  }
  console.log(results);
});
 
connection.end();