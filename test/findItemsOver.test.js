describe('findItemsOver', function () {
    it('should return products that have quantity higher than the threshold 25', function () {
        assert.deepEqual(findItemsOver20([{ "name": "pears", "qty": 37 }, { "name": "bananas", "qty": 10 }]), [{ "name": "pears", "qty": 37 }]);
    });
    it('should return products that have quantity higher than the threshold 25', function () {
        assert.deepEqual(findItemsOver20([{ "name": "berries", "qty": 10 }, { "name": "bananas", "qty": 26 }]), [{ "name": "bananas", "qty": 26 }]);
    });

});


