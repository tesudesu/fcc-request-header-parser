require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// My code starts here

app.get('/api/whoami', function (req, res) {
  res.json({ ipaddress: req.ip, language: req.headers["accept-language"], software: req.headers["user-agent"]});
});

// My code ends here

var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
