var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/smart-tools-data', jsonParser, function(req, res){
  io.emit('smart tools data', req.body.data);
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});
