var express = require('express');
var router = express.Router();
var emailcontroller = require('./emailsender')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/service', function(req, res, next) {
  res.render('service');
});

router.get('/blog', function(req, res, next) {
  res.render('blog');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});
router.post('/contact', emailcontroller.sendemail);

router.get('/price', function(req, res, next) {
  res.render('price');
});

router.get('/team', function(req, res, next) {
  res.render('team');
});

router.get('/single', function(req, res, next) {
  res.render('single');
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio');
});

router.get('/class', function(req, res, next) {
  res.render('class');
});

module.exports = router;
