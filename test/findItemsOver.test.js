let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('findItemsOver', function () {
    it('should return products that have quantity higher than the threshold 25', function () {
        assert.deepEqual(findItemsOver([{ "name": "pears", "qty": 37 }, { "name": "bananas", "qty": 10 }],25), [{ "name": "pears", "qty": 37 }]);
    });
    it('should return products that have quantity higher than the threshold 25', function () {
        assert.deepEqual(findItemsOver([{ "name": "berries", "qty": 10 }, { "name": "bananas", "qty": 26 }],25), [{ "name": "bananas", "qty": 26 }]);
    });

});


