var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = require('chai').expect;

var server = require(__dirname + '/../lib/server.js');

describe('my simple HTTP server', function() {
  it('should handle a post request', function() {
    chai.request('http://localhost:3000')
      .post('/receive')
      .send('{"name" : "test.json"}')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      });
    });

  it('should handle a get request for the same file', function() {
    chai.request('http://localhost:3000')
      .get('/file/test.json')
      .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
      });
  });
});
