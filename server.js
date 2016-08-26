'use strict';

const server = require('express')();
const proxy  = require('./lib/proxy');
const bodyParser = require('body-parser');

server.use(bodyParser.json());       // to support JSON-encoded bodies
server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// Moip Sandbox Proxy
server.use(proxy('sandbox.moip.com.br', {
  prefix  : '/moip-sandbox',
  request : {
    forceHttps : true,
    headers    : {
      'User-Agent' : 'Proxy-Moip 1.0.0',
      'Authorization' : 'Basic MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDE6QUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQg=='
    }
  }
}));

// return the app for all other routes
server.get('*', function (req, res) {
  res.set({ 'Content-Type': 'text/html; charset=utf-8' });
  res.sendFile(__dirname + '/app.html');
});

console.log('\nserver listening on port: 8000\n');
server.listen(8000);
