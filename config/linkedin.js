require('dotenv').load();

var passport = require('passport'),
    LinkedInStrategy = require('passport-linkedin').Strategy;

passport.use(new LinkedInStrategy({
  consumerKey: process.env.LINKEDIN_CLIENT_ID,
  consumerSecret: process.env.LINKEDIN_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/linkedin/callback'
}, function(token, tokenSecret, profile, done){
  console.log(profile);
  done(null, profile);
}));

module.exports = passport;
