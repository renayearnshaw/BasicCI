const supertest = require('supertest');
const server = require('../server.js');

describe('GET /', function () {
    it('displays "Hello World!"', function (done) {
        // The line below is the core test of our app.
        supertest(server).get('/').expect('Hello World!', done);
    });
    after((done) => {
        server.close(done)
    })
});
