// Dependences
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Configuration
var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(express.static(__dirname + '/www'));

// Errors
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
      message: err.message,
      reason: err.reason,
      error: err
    });
  });
} else {
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
      message: err.message,
      reason: err.reason,
      error: {}
    });
  });
}

module.exports = app;
