describe('countRegNumber', function () {
    it('should return the total number of all registration plates in the string', function () {
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    it('should return the total number of all registration plates in the string', function () {
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328,CA 182736,CY 523519,CJ 812328,CA 182736,CY 523519,CJ 812328,CA 636352'), 10);
    });


});