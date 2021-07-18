var express = require('express');
var app = express();

app.use(express.static('./'));

const port = 80;

app.get('*', function(req, res) {
  res.render('./index.html');
});

app.listen(port);