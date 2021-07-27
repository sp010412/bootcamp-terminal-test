describe('isFromBellville' , function(){
    it('should return true for CY 212-880' , function(){
        assert.equal(isFromBellville('CY 212-880'),true);

    });
    it('should return false for CA 212-880' , function(){
        assert.equal(isFromBellville('CA 212-880'),false);

    });


});