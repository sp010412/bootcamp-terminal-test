describe('fromWhere', function () {
    it('should return registration plates for Paarl that start with CY', function () {
        assert.equal(fromWhere('CY'),'Bellville');
});
it('should return registration plates for Cape Town that start with CA', function () {
    assert.equal(fromWhere('CA'),'Cape Town');
});
it('should return Some other place!', function () {
    assert.equal(fromWhere('CR'),'Some other place!');
});
});

