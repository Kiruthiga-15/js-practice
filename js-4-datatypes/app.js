
// 4-data-types (Data Types & Type Conversion)

// Basic (5 tasks)

//1. Identify and display all primitive data types in JavaScript (string, number, boolean,undefined, null)
//string
var name="vijay";
console.log(name);
console.log(typeof(name));
//number
var num=12;
console.log(num);
console.log(typeof(num));
//boolean
var bool=true;
console.log(bool);
console.log(typeof(bool));
//undefined
var message;
console.log(message);
console.log(typeof(message));
//null
var test=null;
console.log(typeof(test));


// 3.Convert a string to a number using Number() or parseInt()
let number=Number(prompt('enter the number'))
console.log(number);

// 4. Convert a number to a string using String() or .toString()
let mynum=String(number);
let mynum2=toString(num);
console.log(mynum);
console.log(typeof(mynum));
console.log(`mynum2 ${mynum2}`,typeof(mynum2))

// 2. Create a program that handles NaN (Not-a-Number) situations

let a= 5;
let b="heelo";
let c=a*b;
console.log(c); //Nan

// 3. Build a type-checking function that returns the exact type of any input
let input = prompt("Enter anything:");

let type = (function getType(input) {
  // Cancel button
  if (input === null) return "null";

  // Empty string
  if (input.trim() === "") return "empty string";

  // Boolean
  if (input.toLowerCase() === "true" || input.toLowerCase() === "false")
    return "boolean";

  // Number
  let num = Number(input);
  if (!isNaN(num)) return "number";

  // Array (expects JSON array)
  try {
    let parsed = JSON.parse(input);
    if (Array.isArray(parsed)) return "array";
    if (typeof parsed === "object" && parsed !== null) return "object";
  } catch (e) {}

  // Default to string
  return "string";
})(input);

console.log(type);


// 4. Write code that shows implicit vs explicit type conversion
// implicit
let nums=5;
let num1="4"
console.log(nums+num1)//54
//explicit
let num2=5;
let num3="4";
let num4=Number(num3);
console.log(num2+num4);

// 1.Build a Robust Data Validator

function validateData(value,type){
   switch (type) {
     case "number":
       return typeof value === "number" && !isNaN(value);
     case "string":
       return typeof value === "string" && value.trim() !== "";
     case "boolean":
       return typeof value === "boolean";
     case "array":
       return Array.isArray(value);
     case "email":
       if (typeof value !== "string") return false;
       let emailRegex = /^[^\s@]+@[^\s@]+\.[^s\@]+$/;
       return emailRegex.test(value);
     default:
       return false;
   }

}
console.log(validateData(123, "number"));          // true
console.log(validateData("Hello", "string"));      // true
console.log(validateData(true, "boolean"));        // true
console.log(validateData([1,2,3], "array"));       // true
console.log(validateData("abc@example.com", "email")); // true
console.log(validateData("", "string"));           // false



function deepTypeCheck(obj) {
  let result = {};
  for (let key in obj) {
    if (obj[key] && typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      result[key] = deepTypeCheck(obj[key]); // recursive
    } else {
      result[key] = Array.isArray(obj[key]) ? "array" : typeof obj[key];
    }
  }
  return result;
}

// Example
const user = {
  name: "John",
  age: 25,
  preferences: {
    colors: ["red", "blue"],
    subscribed: true,
  },
};
console.log(deepTypeCheck(user));
