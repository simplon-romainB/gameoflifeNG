var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'

});




/* GET home page. */
router.get('/:nomconfig-:viecells-:cellsstart-:cellswide', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    connection.query('INSERT INTO tablegol (nomconfig,viecells, cellsstart, cellswide) VALUES("' +
        req.params.nomconfig + '","' + req.params.viecells + '","' + req.params.cellsstart + '","' + req.params.cellswide + '")',
        function(err, rows) {
            if (err) throw err;
            console.log(req.params);
            res.send(req.params.nomconfig);

        });
});



module.exports = router;