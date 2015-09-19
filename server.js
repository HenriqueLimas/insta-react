'use strict';

let path = require('path');

let express = require('express');
let app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

var server = app.listen(3000, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});