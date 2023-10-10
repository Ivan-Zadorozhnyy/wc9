const { expect } = require('chai');

const { getFactorial, multiply } = require('/Users/ivanzadorozhnyy/WebstormProjects/untitled/scripts/factorial+multiply.js');

describe('getFactorial', function() {
    it('should return 120 for 5', function() {
        expect(getFactorial(5)).to.equal(120);
    });

    it('should return 120 for "5"', function() {
        expect(getFactorial('5')).to.equal(120);
    });

    it('should return "not a number" for "blabla"', function() {
        expect(getFactorial('blabla')).to.equal('not a number');
    });
});

describe('multiply', function() {
    it('should return 60 for multiply(2)(3)(10)', function() {
        expect(multiply(2)(3)(10)()).to.equal(60);
    });

    it('should return -769072 for multiply(-1)(677)(568)(2)', function() {
        expect(multiply(-1)(677)(568)(2)()).to.equal(-769072);
    });

    it('should return 3 for multiply(3)', function() {
        expect(multiply(3)()).to.equal(3);
    });
});

