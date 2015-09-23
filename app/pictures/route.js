'use strict';

let fs = require('fs');
let path = require('path');

let bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.get('/pictures', (req, res) => {
    fs.readFile('data/pictures/pictures.json', (err, data) => {
      if (err) {
        console.error(err.message);
      }

      res.setHeader('Cache-Control', 'no-cache');
      res.json(JSON.parse(data));
    });
  });
};