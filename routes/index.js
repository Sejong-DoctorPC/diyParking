var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.send({title: 'hello react!'});
});

/*
router.get('/', function(req, res) {
    res.send({greeting: 'Hello React x Node.js'});
});
*/
module.exports = router;
