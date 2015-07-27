var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(request, response, next){
  response.render('login', {title: 'Login'});
});

// Logout
router.get('/logout', function(request, response, next){
  request.logout();
  response.redirect('/');
});

module.exports = router;
