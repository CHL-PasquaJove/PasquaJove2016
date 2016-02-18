const http         = require('http'),
      fs           = require('fs'),
      path         = require('path'),
      contentTypes = require('./content-types'),
      env          = process.env;


var port = env.OPENSHIFT_NODEJS_PORT || '3000'
var ip = env.OPENSHIFT_NODEJS_IP || 'localhost'
var base = env.OPENSHIFT_REPO_DIR || '../'
var filterUrlRegex = /([^\?]+)(?:\?|)(.+)?/;

function notFound(err, req, res) {
  console.log(req.method + " " + req.url, err);
  res.writeHead(404);
  res.end();
}

function filterUrl(url) {
  return url.match(filterUrlRegex)[1];
}

function respond(req, res) {
  var url = filterUrl(req.url);
  function sendFile(file_path, cb) {
    fs.readFile(file_path, function (err, data) {
      if (err) {
        cb(err, req, res);
      } else {
        console.log(req.method + " " + req.url);
        res.setHeader('Content-Type', contentTypes[path.extname(req.url).slice(1)]);
        res.end(data);
      }
    });
  }

  function firstTry(err, req, res) {
    sendFile(base + 'www/src' + url, notFound);
  }

  sendFile(base + 'www' + url, firstTry)
}

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    req.url += 'index.html';
  }
  // Your application HAS to respond to GET /health with status 200
  // for OpenShift health monitoring
  if (req.url == '/health') {
    res.writeHead(200);
    res.end();
  } else {
    respond(req, res);
  }
});

server.listen(port, ip, function () {
  console.log('Server started: ' + ip + ":" + port);
});
