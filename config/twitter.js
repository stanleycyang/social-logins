require('dotenv').load();

var passport = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy,
    User = require('../models/User');


passport.use(new TwitterStrategy({
  consumerKey: process.env.TW_CONSUMER_KEY,
  consumerSecret: process.env.TW_CONSUMER_SECRET,
  callbackURL: 'http://localhost:3000/auth/twitter/callback'
}, function(token, tokenSecret, profile, done){
  console.log(token);
  console.log(tokenSecret);
  console.log(profile);
  return done(null, profile);
}

));
