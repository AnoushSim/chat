const WebSocket  = require('ws');
const mongoose = require('mongoose');

const ChatDB = mongoose.createConnection('mongodb://localhost:27017/chat');
require('./models/messages');
require('./models/channels');

let db = {
  users: ChatDB.model('users', require('./models/users')), //es meky senc anenq, zut dzevy hishenq
  channels: ChatDB.model('channels'),
  messages: ChatDB.model('messages'),
}

const wss = new WebSocket.Server({port: 3033});

let clients = [];

wss.on('connection' , function connection(ws) {
     clients.push(ws);
     ws.send('Congrats!');

     ws.send('1. authorize\n2. choose channels\n3.write message');

     ws.on('message', function incoming(message) {
        /*(clients || []).forEach( (c,ix) =>  {
          if (c == ws) { return;}
          c.send('User ' + ix + '. Message ' + message);
        });*/
        if (message == '1') {
          ws.send('type username and password');
          ws.on('message', function incoming(message) {
                 let arr = message.split(',');
                 ws.send("hi" + arr[0])} );
        } else if (message == '2') {
                   ws.send('no channels, create one?')
        } else if (message == '3') {
                   ws.send('type message')
        }
     });

     });
