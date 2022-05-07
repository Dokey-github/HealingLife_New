var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'platinum1225!',
  database : 'healinglife'
});
 
connection.connect();
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error) {
      console.log('Query Failed', error);
  }
  console.log('The results : ', results);
});
 
connection.end();