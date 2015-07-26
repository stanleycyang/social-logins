require('dotenv').load();
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    passport = require('passport'),
    User = require('../models/User');


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL : 'http://127.0.0.1:3000/auth/google/callback'
}, function(accessToken, refreshToken, profile, done){
  // make the code asynchronous. User find wont run until we have all the data back from Google
  process.nextTick(function(){
    console.log(profile);
    return done(null, profile);
  });
}
));

module.exports = passport;
