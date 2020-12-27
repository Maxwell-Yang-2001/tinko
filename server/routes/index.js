const { RSA_NO_PADDING } = require('constants');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('Working properly');
});

module.exports = router;
