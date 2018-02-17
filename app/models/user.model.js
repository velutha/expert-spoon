const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({},
  {
    minimize: false,
    versionKey: false
  }
);

userSchema.set('collection', 'users');
const User = mongoose.model("User", UserSchema);

module.exports = User;
