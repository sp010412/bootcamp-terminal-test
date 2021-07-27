describe('findItemsOver20', function () {
    it('should return all the products that have a quantity higher than 20', function () {
        assert.deepEqual(findItemsOver20([
            { "name": "pears", "qty": 37 }, { "name": "bananas", "qty": 5 }]), 
            [{ "name": "pears", "qty": 37 }]);
    });
    it('should return all the products that have a quantity higher than 20', function () {
        assert.deepEqual(findItemsOver20([
            { "name": "cheese", "qty": 60 }, { "name": "bread", "qty": 1 }]), 
            [{ "name": "cheese", "qty": 60 }]);
    });
});


