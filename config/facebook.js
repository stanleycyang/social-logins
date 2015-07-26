// Configure all the ids, secrets, and callback urls
require('dotenv').load();

var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: process.env.FB_CLIENT_ID,
  clientSecret: process.env.FB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function(accessToken, refreshToken, profile, done){
  // Uses FB account and OAuth 2.0
  // requires a verify callback, which accepts the credentials and calls done providing a user, and optionally enabling appsecret_proof
  /*User.findOrCreate({facebookId: profile.id}, function(error, user){*/
    //// Send back the error and the user
    //return done(error, user);
  /*});*/
  return done(null, profile);
}

));

module.exports = passport;
