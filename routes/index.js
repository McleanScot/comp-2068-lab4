var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mclean Family' });
});
router.get('/dad', function(req, res, next) {
  res.render('dad');
});
router.get('/mom', function(req, res, next) {
  res.render('mom');
});
router.get('/mary', function(req, res, next) {
  res.render('mary');
});
router.get('/niki', function(req, res, next) {
  res.render('niki');
});




module.exports = router;
