var app = require('express')();

app.get('/file/:filename', function(req, res) {
  var filename = req.params.filename;
  path = '/../files/' + filename;
  res.sendFile(path, function(err) {
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
