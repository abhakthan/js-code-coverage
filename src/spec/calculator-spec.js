/**
 * Created by abhakthan on 6/30/16.
 */
"use strict";

//require('calculator');

describe('Calculator Class', function() {

  it('should add two numbers and return the result', function() {
    var calc = new Calculator();
    expect(calc.add(1,1)).toBe(2);
  });

  it('should subtract two numbers and return the result', function() {
    var calc = new Calculator();
    expect(calc.subtract(1,1)).toBe(0);
  });

  it('should multiply two numbers and return the result', function() {
    var calc = new Calculator();
    expect(calc.multiply(1,1)).toBe(1);
  });

  it('should divide two numbers and return the result', function() {
    var calc = new Calculator();
    expect(calc.divide(1,1)).toBe(1);
  });

});
