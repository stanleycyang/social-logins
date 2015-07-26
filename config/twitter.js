require('dotenv').load();

var passport = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy,
    User = require('../models/User');


passport.use(new TwitterStrategy({
  consumerKey: process.env.TW_CONSUMER_KEY,
  consumerSecret: process.env.TW_CONSUMER_SECRET,
  callbackURL: 'http://localhost:3000/auth/twitter/callback'
}, function(token, tokenSecret, profile, done){
  /*console.log(token);*/
  /*console.log(tokenSecret);*/
  console.log(profile);
  /*User.find({email: profile.id}, function(error, user){*/
    //if(user.length === 0){
      //User.create({
        //twitterID: profile.id,
        //TWToken: token,
        //TWTokenSecret: tokenSecret,
        //name: profile.displayName,
        //email: 
      //})
    //}
  /*})*/
  return done(null, profile);
}

));
module.exports = passport;
