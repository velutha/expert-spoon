const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  }
},
  {
    minimize: false,
    versionKey: false
  }
);

userSchema.set('collection', 'users');
const User = mongoose.model("User", UserSchema);

module.exports = User;
