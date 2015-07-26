require('dotenv').load();
var passport = require('passport'),
    GithubStrategy = require('passport-github').Strategy;

passport.use(new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/github/callback'
}, function(accessToken, refreshToken, profile, done){
  console.log(profile);
  return done(null, profile);
}));

module.exports = passport;
