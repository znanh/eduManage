var express = require('express')
var app = require('express')(),
  server = require('http').createServer(app)

server.listen(7999)
app.use(express.static('./dist'))
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html')
})
