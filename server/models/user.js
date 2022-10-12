const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  hashedPassword: {
    type: String,
    require: true
  },
  role: String
});


module.exports = mongoose.model("User", UserSchema);

