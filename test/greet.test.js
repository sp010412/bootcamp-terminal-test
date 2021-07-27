describe('Greet' , function(){
    it('should show you a greet message and name' , function(){
        assert.equal(greet('Cara'),'Hello, Cara')
    });
    it('should show you a greet message and name' , function(){
        assert.equal(greet('Andy'),'Hello, Andy')
    });

});