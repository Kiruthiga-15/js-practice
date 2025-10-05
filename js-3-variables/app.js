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

// 2. Create a program that shows variable hoisting with var vs let
// var num1;
console.log(num1);//undefined shown
var num1=10;
console.log(num1);
// let num2;
// console.log(num2);// temporal dead zone reference error shown 
try{
 console.log(num2);
}
catch(err){
 console.error(err.message);
}
let num2=5;
console.log(num2);

// 3. Build a function that demonstrates local vs global variable scope

var fruit="apple";
let favcolor="blue";
function favourite(){
    
    console.log(fruit)
    console.log(favcolor);
    
}
favourite();

function favItems(){
    var favPlace="kadathur";
    let favFood="Doosa";
    console.log(favPlace);
    console.log(favFood);
}
favItems();
try{
console.log(favPlace);
console.log(favFood);
}
catch(error){
    console.error("error",error.message);
}

// 4. Write code that shows how const works with objects (reference vs value)

const myInfo={
    myName:"john",
    myAge:20,
    myFavColor:"blue",

}
console.log(myInfo)

myInfo.myName="vijay";
console.log(myInfo.myName);

try{
    myInfo = {
      myAge: 21,
    };
  console.log(myInfo.myAge); //  Uncaught TypeError: Assignment to constant variable.
} 
catch(err){
   console.error(err.message);
}


// 5.Create a program that uses destructuring to extract values from an array
const colors=['pink','blue','red','orange','violet'];
const [firstColor,secondColor,thirdcolor,fourthColor,fifthColor]=colors;
console.log(`${fifthColor},${fourthColor},${thirdcolor},${secondColor},${firstColor}`);
const [color1,,,color4,]=colors;
console.log(`${color1},${color4}`);
const [color,...restColors]=colors;
console.log(color);
console.log(restColors);


// Advanced (5 tasks)
// 1. Build a counter application that demonstrates closure and variable scope
function counter(){
    var count=0;
    return function(){
        count++;
        return count;
    };
}
const ans=counter();
console.log(ans());
console.log(ans());
console.log(ans());
try{
    console.log(count)
}
catch(err){
   console.error(err.message);
}

// 2. Create a program that shows the temporal dead zone with let and const
//let
try {
  console.log(num4);
  
} catch (err) {
  console.error(err.message);
}
let num4=10;
console.log(num4);

//const

try {
  console.log(num5);
} catch (err) {
  console.error(err.message);
}
const num5=15;
console.log(num5);

// 3. Implement a module pattern using IIFE to create private variables

const counterModule=(function(){
    var countIn=0;
    function logCount(){
        console.log("private",countIn);
    }

    return {
      increment:function(){
        countIn++;
        logCount();
        return countIn;
      },
      decrement: function(){
        countIn=0;
        logCount();
        return countIn;
      }
    }
})();
 console.log("1:",counterModule.increment())
  console.log("2:", counterModule.increment());
   console.log("3:", counterModule.increment());
 console.log("4:", counterModule.decrement());
  console.log("5:", counterModule.increment());

// 4. Build a configuration manager using const for immutable settings
const config=Object.freeze({
    appname:"TestMe",
    version:'0.1',
    defug:true,
});
try{
    config.appname="testme";
    console.log(config.appname);
}
catch(err){
    console.error(err.message);
}
 config.appname = "testme";
 console.log(config.appname);
console.log(config)

// 5. Create a program demonstrating variable shadowing across different scopes

let message="helloo i'm from global scope";
function greet(){
    let message="hello i'm form function scope";
    console.log(`inside funciton :${message}`);
    if(true){
        let message="hello i'm from block scope";
        console.log(`block  :${message}`);
    }
     console.log(`after block  :${message}`);
}
 console.log(`global funciton :${message}`);