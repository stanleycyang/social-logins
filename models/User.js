var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
  facebookID: {
    type: String,
    index: {
      unique: true
    }
  },
  twitterID: {
    type: String,
    index: {
      unique: true
    }
  },
  FBToken: String,
  TWToken: String,
  TWTokenSecret: String,
  email: {
    type: String,
    index: {
      unique: true
    }
  },
  name: String
});

module.exports = mongoose.model('User', userSchema);
