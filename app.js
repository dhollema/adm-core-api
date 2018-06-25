var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/projects', function(req, res) {
  res.send({"message":"retrieved all projects"});
});

app.post('/projects', function(req, res) {
  res.send({"message":"added new project"});
});

app.get('/projects/{projectId}', function(req, res) {
  res.send({"message":"retrieved project"});
});

app.put('/projects/{projectId}', function(req, res) {
  res.send({"message":"updated project"});
});

app.delete('/projects/{projectId}', function(req, res) {
  res.send({"message":"deleted project"});
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
