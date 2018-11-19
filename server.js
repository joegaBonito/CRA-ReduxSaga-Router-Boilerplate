require('@babel/register'); //Need this library in order to run ES6 syntax on the NodeJS
require('@babel/polyfill');
var express = require('express');
var app = express();
var path = require('path');
const fs = require('fs');
app.use(express.static(__dirname + "/build/"));

app.get('*', function(req, res) {
    const indexFile = path.resolve(__dirname +'/build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
          console.error('Something went wrong:', err);
          return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(data);
      });
});

app.listen(8001, () => {
  console.log("app started in 8001")
});