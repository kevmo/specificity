var express = require('express');
var router = express.Router();

var handlers = require('../lib').handlers;

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  return handlers.index(req, res);
});

module.exports = router;
