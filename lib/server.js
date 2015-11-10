var express = require('express');
var app = express();
var path = require('path');
// need path.resolve to avoid "forbidden" error

var fs = require('fs');

var router = express.Router();

// This is the easy way (express.static)
// app.use('/files', express.static('files'));

// this is the other way
app.get('/file/:filename', function(req, res) {
  var fileName = req.params.filename;
  filePath = __dirname + '/../files/' + fileName;
  var fileObject = JSON.parse(fs.readFileSync(filePath));
  res.status(200).json(fileObject);
  console.log('sent :' + fileName);
  // res.status(200).json(fileObject, function(err) {
  //   if (err) {
  //     console.log(err);
  //     console.log(path);
  //     res.status(err.status).end();
  //   }
  //   else {
  //     console.log('sent: ' + filename);
  //   }
  // });
});

app.post('/receive', function(req, res) {
  var body = '';
  filePath = path.resolve(__dirname + '/../files/');
  req.on('data', function(data) {
    body += data;
  });

  req.on('end', function() {
    bodyParsed = JSON.parse(body);
    fileName = bodyParsed.name;
    filePath += "/" + fileName;
    fs.writeFile(filePath, body, function(err) {
      if (err) throw err;
      console.log('saved ' + filePath);
      res.end();
    });
  });
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
