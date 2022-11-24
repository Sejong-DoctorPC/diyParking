var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json([
    {id: 1, username: "kyh"},
    {id: 2, username: "kiy"}    
  ]);
});

module.exports = router;
