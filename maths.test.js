const { add, subtract, multiply, divide } = require("./maths")

test ('add 20 + 20 equal to 40',()=>{
    expect(add(20,20)).toBe(40);
}


);
// subtract//

test('subtract 9-2 to equal 7' ,()=>{
    expect(subtract(9,2)).toBe(7)

}
);

//mutiply
test('mutiply 8*8 equal to 64',() =>{
    expect(multiply(8,8)).toBe(64)
}


);


//divide//
test ('divide 20/2 equal to 10',()=>{
    expect(divide(20,2)).toBe(10);
}

);