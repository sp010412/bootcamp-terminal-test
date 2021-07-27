describe('isWeekday' , function(){
    it('findS out if Monday is a day of the week' , function(){
        assert.equal(isWeekday('Monday'), true);

    });
    it('finds out if Saturday is a day of the week' , function(){
        assert.equal(isWeekday('Saturday'), false);

    });


});