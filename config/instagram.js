require('dotenv').load();
var passport = require('passport'),
    InstagramStrategy = require('passport-instagram').Strategy;

passport.use(new InstagramStrategy({
  clientID: process.env.INSTAGRAM_CLIENT_ID,
  clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/instagram/callback"
},
function(accessToken, refreshToken, profile, done){
  process.nextTick(function(){
    console.log(profile);
    return done(null, profile);
  });
}
));

module.exports = passport;
