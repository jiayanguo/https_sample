const https = require('https');
const fs = require('fs');
const express = require('express')
const app = express()

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

app.get('/', function (req, res) {
  res.send('GET request to homepage')
})

https.createServer(options, app).listen(8000);

