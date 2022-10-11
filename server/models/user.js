const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: String,
  password: String,
  role: String
});


module.exports = mongoose.model("User", UserSchema);

