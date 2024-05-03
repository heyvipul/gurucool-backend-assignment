const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: String
  
}, { timestamps: true });


const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
