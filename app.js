var express = require('express');
var app = express();

app.get('/projects', function(req, res) {
  res.send({
    "got all projects"
  });
});

app.post('/projects', function(req, res) {
  res.send({
    "added new project"
  });
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
