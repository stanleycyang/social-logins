// Configure all the ids, secrets, and callback urls
require('dotenv').load();

var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    User = require('../models/User');

passport.use(new FacebookStrategy({
  clientID: process.env.FB_CLIENT_ID,
  clientSecret: process.env.FB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function(accessToken, refreshToken, profile, done){
  // Uses FB account and OAuth 2.0
  // requires a verify callback, which accepts the credentials and calls done providing a user, and optionally enabling appsecret_proof
  // Pull user profile pic 'http://graph.facebook.com/' + profile.id + '/picture'

  User.find({email: profile._json.email}, function(error, person){
    if(person.length === 0){
      User.create({
        facebookID: profile.id,
        FBToken: accessToken,
        name: profile.displayName,
        email: profile._json.email
      });
    }
    return done(error, person);
  });
  /*return done(null, profile);*/
}

));

module.exports = passport;
