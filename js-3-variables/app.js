// Basic (5 tasks)
// 3. Swap the values of two variables without using a third variable

let a=5;
let b=8;
console.log(`before swap a and b is:${a},${b} `)
a=a+b;
b=a-b;
a=a-b;
console.log(`after swap a and b is ${a},${b}`)


// 4.Declare a constant for PI and use it to calculate the circumference of a circle
let radius=5;
const PI=3.14;
let circumference=PI*radius*2;
console.log(circumference.toFixed(2));

//  Create variables with meaningful names for a shopping cart (itemName, price,quantity)

let itemName="gifts";
let price=100;
let quantity=10;
console.log(`${itemName},${price},${quantity}`);

let shopping={
    itemName:'gifts',
    price:200,
    quantity:10,

}
console.log(shopping);