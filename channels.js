const mongoose = require('mongoose');

const ChannelsSchema = new mongoose.Schema({
  title:String,
  members: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'users '
  }]
});

mongoose.model('channels', ChannelsSchema);
