let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl', function () {
    it('should return the total number of registration plates for Paarl', function () {
        assert.equal(countAllPaarl('CJ 345 333,CJ 123'), 2);
    });
    it('should return the total number of registration plates for Paarl', function () {
        assert.equal(countAllPaarl('CJ 345 999,CJ 123,CJ 888 554'), 3);
    });
});