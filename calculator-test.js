
describe("Testing Loan Calculator", function() {


  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({amount: 10000, years: 5, rate: 6})).toEqual('193.33');
    expect(calculateMonthlyPayment({amount: 0, years: 5, rate: 6})).toEqual('0.00');
    expect(calculateMonthlyPayment({amount: 10000, years: 0, rate: 6})).toEqual('Infinity');
    expect(calculateMonthlyPayment({amount: 10000, years: 5, rate: 0})).toEqual('NaN');
    expect(calculateMonthlyPayment({amount: 1, years: 1, rate: 1})).toEqual('0.08');
    expect(calculateMonthlyPayment({amount: 0, years: 0, rate: 0})).toEqual('NaN');
    expect(calculateMonthlyPayment({amount: -10000, years: 5, rate: 6})).toEqual('-193.33');
  });


  it("should return a result with 2 decimal places", function() {
    // expect(calculateMonthlyPayment({amount: }))
    expect(calculateMonthlyPayment({amount: 10000, years: 5, rate: 6})).toMatch(/[\d*][\.][\d{2}]/);
    expect(calculateMonthlyPayment({amount: 1, years: 1, rate: 1})).toMatch(/[\d*][\.][\d{2}]/);
    expect(calculateMonthlyPayment({amount: 0, years: 5, rate: 6})).toEqual('0.00');
    expect(calculateMonthlyPayment({amount: -10000, years: 5, rate: 6})).toMatch(/[-\d*][\.][\d{2}]/);
  });

 

it("should throw an exception for invalid inputs (non-numeric (all) and 0 (years, rate))", function() {

  expect(function() {
    calculateMonthlyPayment({amount: 'banana', years: 5, rate: 6});
  }).toThrow();
  expect(function() {
    calculateMonthlyPayment({amount: 10000, years: 'banana', rate: 6});
  }).toThrow();
  expect(function() {
    calculateMonthlyPayment({amount: 10000, years: 5, rate: 'split'});
  }).toThrow();
  expect(function() {
    calculateMonthlyPayment({amount: 10000, years: 0, rate: 6});
  }).toThrow();
  expect(function() {
    calculateMonthlyPayment({amount: 10000, years: 5, rate: 0});
  }).toThrow();

});

})