var request = require('request');
var express = require('express');
var fs = require('fs');
var upload = require('jquery-file-upload-middleware');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/client'));

upload.configure({
  method: 'POST',
  url: 'https://upload.wistia.com/',
  qs: {
    api_password: '',
  }
});

app.use('/upload', upload.fileHandler({
  file: fs.createReadStream(__dirname + '/public/test.mp4')
}));

app.use('/test', function(req, res) {
  var postOptions = {
    url: 'https://upload.wistia.com/',
    qs: {
      api_password: '',
    }
  };

  var r = request.post(postOptions, function(err, res, body) {
    console.log(res.statusCode);
    console.log(body);
  });

  var form = r.form();
  form.append('file', fs.createReadStream(__dirname + '/public/test.mp4'));

  // var getOptions = {
  //   url: 'https://api.wistia.com/v1/medias.json',
  //   qs: {
  //     api_password: ''
  //   }
  // }

  // request.get(getOptions, function(err, res, body) {
  //   console.log(err);
  //   console.log(res.statusCode);
  //   console.log(body);
  // });
});

var server = app.listen(port, function() {
  console.log('listening to port: ' + port);
});

