var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
  facebookID: {
    type: String,
    index: {
      unique: true
    }
  },
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('User', userSchema);
