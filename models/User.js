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
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('User', userSchema);
