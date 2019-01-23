const expect = require('chai').expect;

const { render } = require('../../routes/vcard');

let req = {
    body: {}
};

let res = {
    sendCalledWith: '',
    send: function(status, data) {
        this.statusCode = status;
        this.data = data;
    },
    set: function(key, value) {
        this[key] = value;
    }
};

describe('vCard Route', function() {
    describe('Render() function', function() {
        it('Should return a 202 code ', function() {
            render(req, res);
            expect(res.statusCode).to.equal(202);
        });
        it('Should return a vcf formatted string ', function() {
            render(req, res);
            expect(res.data).to.contain('BEGIN:VCARD');
        });
        it('should set the text/vcf header', function() {
            render(req, res);
            expect(res['Content-Type']).to.equal('text/vcard; name="jprwilson.vcf"');
        });
        it('should set the content disposition header', function() {
            render(req, res);
            expect(res['Content-Disposition']).to.equal('inline; filename="jprwilson.vcf"');
        });
    });
});
