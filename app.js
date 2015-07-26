// Source in OAuth configuration
require('dotenv').load();
var express = require('express');
var passport = require('passport');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var session = require('express-session');

// Connect to our local database
mongoose.connect('mongodb://localhost/passport_social');

// Facebook Strategy
var Facebook = require('./config/facebook');
var Twitter = require('./config/twitter');
var Google = require('./config/google');
var Instagram = require('./config/instagram');

// Routes
var routes = require('./routes/index');
var users = require('./routes/users');
var social = require('./routes/social');

// If authentication succeeds, a session will be established and maintained via cookie set in the user's browser. Passport will serialize and deserialize the user instances to and from the session

passport.serializeUser(function(user, done){
  done(null, user);
});

passport.deserializeUser(function(obj, done){
  done(null, obj);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride());
// Initialize passport and start the session
app.use(session({secret: process.env.SECRET}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/', social);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
