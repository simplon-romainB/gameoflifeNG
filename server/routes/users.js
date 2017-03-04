var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'

});

/* GET users listing. */
router.get('/:param', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    connection.query('SELECT * FROM tablegol WHERE nomconfig="' + req.params.param + '"', function(err, rows) {
        if (err) throw err;
        res.send(rows)

    });



});

module.exports = router;