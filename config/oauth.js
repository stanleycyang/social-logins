// Configure all the ids, secrets, and callback urls

var ids = {
  facebook: {
    clientID: process.env.FB_CLIENT_ID,
    clientSecret: process.env.FB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  twitter: {
    consumerKey: TW_CONSUMER_KEY,
    consumerSecret: TW_CONSUMER_SECRET,
    callbackURL: 'http://localhost:3000/auth/twitter/callback'
  },
  github: {
    clientID: GH_CLIENT_ID,
    clientSecret: GH_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  google: {
    returnURL: 'http://localhost:3000/auth/google/callback',
    realm: 'http:localhost:3000'
  }
};

module.exports = ids;
