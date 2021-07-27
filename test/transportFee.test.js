describe('transportFee', function () {
    it('should return the price R20 if its a morning shift', function () {
        assert.equal(transportFee('morning'), 'R20')
    });

    it('should return the price R10 if its a afternoon shift', function () {
        assert.equal(transportFee('afternoon'), 'R10')
    });
    it('should return the free if its a afternoon shift', function () {
        assert.equal(transportFee('night'), 'free')
    });
});