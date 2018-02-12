QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
    assert.equal(ot(2,3,0,0,0), 3.4, 'tested with actual inputs results correct');
    assert.equal(ot(-3,-5,0,0,0), 0+" given input is in negative", 'tested with negative numbers returns 0');
    assert.equal(ot(0,0,0,0,0), 0+" you have entered all zeros", 'returns 0 if all inputs are zero');
    assert.equal(ot('','','','',''), 0, 'tested with missed arguments returns 0');
    assert.equal(ot(20,4,10,5,10),0+" maximum courses shouldn't reach 33",'returns 0 if number of courses is greater than 33');
});

