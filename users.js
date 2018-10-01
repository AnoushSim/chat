const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  username: String,
  age: Number
});

//menak scheman export anenq
module.exports = UsersSchema;
