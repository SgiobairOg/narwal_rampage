const expect = require('chai').expect;

const { ping } = require('../../routes/health');

let req = {
    body: {}
};

let res = {
    sendCalledWith: '',
    send: function(status, data) {
        this.statusCode = status;
        this.data = data;
    }
};

describe('Health Route', function() {
    describe('Ping() function', function() {
        it('Should return a 202 code ', function() {
            ping(req, res);
            expect(res.statusCode).to.equal(202);
        });
        it('Should return a status message ', function() {
            ping(req, res);
            expect(res.data).to.haveOwnProperty('status');
        });
    });
});
