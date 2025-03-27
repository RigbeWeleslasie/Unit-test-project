const isValidEmail = require("./emailValidator")


test('shirleyabwoi@gmail.com is valid,',()=>{
    expect(isValidEmail('shirleyabwoi@gmail.com')).toBe(true);
});