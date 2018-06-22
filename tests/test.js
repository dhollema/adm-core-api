'use strict';

const supertest = require('supertest'); 
const test = require('unit.js');
const app = require('../app.js');

const request = supertest(app);

describe('Tests app', function() {
  it('verifies get all projects', function(done) {
    request.get('/projects').expect(200).end(function(err, result) {
        test.string(result.body.message).contains('project');
        test.value(result).hasHeader('content-type', 'application/json; charset=utf-8');
        done(err);
    });
  });
  it('verifies post project', function(done) {
    request.post('/projects').expect(200).end(function(err, result) {
        test.string(result.body.message).contains('project');
        test.value(result).hasHeader('content-type', 'application/json; charset=utf-8');
        done(err);
    });
  });
});
