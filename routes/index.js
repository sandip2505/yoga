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
router.get('/blog1', function(req, res, next) {
  res.render('blog1');
});
router.get('/blog2', function(req, res, next) {
  res.render('blog2');
});
router.get('/blog3', function(req, res, next) {
  res.render('blog3');
});
router.get('/email', function(req, res, next) {
  res.render('emailtemp');
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
router.get('/heal-emotions', function(req, res, next) {
  res.render('heal-emotions');
});

router.get('/breath-work', function(req, res, next) {
  res.render('breath-work');
});

router.get('/yoga-therapy', function(req, res, next) {
  res.render('yoga-therapy');
});

router.get('/hypnotherapy', function(req, res, next) {
  res.render('hypnotherapy');
});

router.get('/inner', function(req, res, next) {
  res.render('inner');
});

router.get('/past', function(req, res, next) {
  res.render('past');
});

module.exports = router;
