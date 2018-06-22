var express = require('express');
var app = express();

app.get('/projects', function(req, res) {
  res.send({"message":"retrieved all projects"});
});

app.post('/projects', function(req, res) {
  res.send({"message":"added new project"});
});

app.get('/project/{projectId}', function(req, res) {
  res.send({"message":"retrieved project"});
});

app.put('/project/{projectId}', function(req, res) {
  res.send({"message":"updated project"});
});

app.delete('/project/{projectId}', function(req, res) {
  res.send({"message":"deleted project"});
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
