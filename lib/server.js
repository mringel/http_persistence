var express = require('express');
var app = express();
var path = require('path');

// This is the easy way (express.static)
// app.use('/files', express.static('files'));

// this is the hard way
app.get('/file/:filename', function(req, res) {
  var filename = req.params.filename;
  filePath = __dirname + '/../files/' + filename;
  res.sendFile(path.resolve(filePath), function(err) {
    if (err) {
      console.log(err);
      console.log(path);
      res.status(err.status).end();
    }
    else {
      console.log('sent: ' + filename);
    }
  });
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
