var express = require('express');
var app = express();
var path = require('path');

app.use('/public', express.static(__dirname +  '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

console.log('Everything starts at port: 8080');
app.listen(8080);
