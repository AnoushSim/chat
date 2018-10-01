const mongoose =require('mongoose');

const MessagesSchema = new mongoose.Schema({
  text: String,
  dare: {type: Date, default: Date.now},
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'users'
  },
  channel: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'channels'
  }
})

mongoose.model('messages', MessagesSchema);
