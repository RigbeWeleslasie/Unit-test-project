const fizzBuzz = require("./fizzbuzz")

test('Multiples of 3 and 5' ,()=>{
    expect (fizzBuzz(15)).toBe('FizzBuzz');
});

test('Multiples of 3' ,()=>{
    expect (fizzBuzz(6)).toBe('Fizz');
});

test('Multiples of 5' ,()=>{
    expect (fizzBuzz(25)).toBe('Buzz');
});
