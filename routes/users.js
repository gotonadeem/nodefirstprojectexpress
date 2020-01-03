var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('nadeem user');
});
router.get('/xyz', function(req, res, next) {
  res.send('xyz user');
});
module.exports = router;
