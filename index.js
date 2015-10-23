var express = require('express');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/client'));

var server = app.listen(port, function() {
  console.log('listening to port: ' + port);
});
