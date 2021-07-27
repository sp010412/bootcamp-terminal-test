describe('regCheck', function () {
    it('should return true for DV 23 NB GP', function () {
        assert.deepEqual(regCheck('DV 23 NB GP', 'GP'),true);

    });
    it('should return false for DV 23 NB CA', function () {
        assert.deepEqual(regCheck('DV 23 NB CA', 'MP'),false);


    });


});