var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
  
});

/* GET users listing. */
router.get('/', function(req, res, next) {

	 connection.query('SELECT * FROM tablegol', function(err, rows){
	 	if (err) throw err ;
	 	console.log('tablegol', rows[0]);
    
  });


  res.send('tablegol');
});

module.exports = router;
