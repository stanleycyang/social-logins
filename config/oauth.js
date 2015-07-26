// Configure all the ids, secrets, and callback urls
require('dotenv').load();

var ids = {
  facebook: {
    clientID: process.env.FB_CLIENT_ID,
    clientSecret: process.env.FB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  twitter: {
    consumerKey: process.env.TW_CONSUMER_KEY,
    consumerSecret: process.env.TW_CONSUMER_SECRET,
    callbackURL: 'http://localhost:3000/auth/twitter/callback'
  },
  github: {
    clientID: process.env.GH_CLIENT_ID,
    clientSecret: process.env.GH_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  google: {
    returnURL: 'http://localhost:3000/auth/google/callback',
    realm: 'http:localhost:3000'
  }
};

module.exports = ids;
