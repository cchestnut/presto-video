var os = require('os');
var fs = require('fs');

var express = require('express'),
  app = module.exports = express(),
  hogan = require('hogan-express');

app.engine('mu', hogan);
app.set('view engine', 'mu');
app.set('views', __dirname + '/views');

app.get('/', function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(fs.readFileSync(__dirname + '/views/main.html'));
  res.end();
});

const port = process.env.PORT || 3000;
app.listen(port, function (error) {
  if (error) {
    console.error('Unable to initalize server.\nERROR: ' + error);
    process.exit(10);
  }
  console.info('App running on Port: ' + port);
});
