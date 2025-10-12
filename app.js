// ■ Basic 10 Tasks
// 1. Print 'Hello World' in console and alert box.

console.log("Hello ,World");
// alert("Hello World");

// 2. Create 3 variables using var, let, const and explain difference
var a=10;// function scoped and blcok scoped
let b=20;// block scoped
const c=30;// block scoped and cannot be reassigned

// 3. Perform addition, subtraction, multiplication, division using numbers.
var num1=30;
var num2=10;
function add(a,b){
  return a+b;
}
console.log("addition:",add(num1,num2));

function sub(a, b) {
  return a - b;
}
console.log("sub:", sub(num1, num2));
function mul(a, b) {
  return a * b;
}
console.log("mul:", mul(num1, num2));
function div(a, b) {
  return a / b;
}
console.log("division:", div(num1, num2));

// using switch case
var operation="*";
switch(operation){
  case "+":
    console.log("add:",add(num1,num2));
    break;
  case "-":
    console.log("sub:",sub(num1,num2));
    break;
  case "*":
    console.log("mul:",mul(num1,num2));
    break;
  case "/":
    console.log("div:",div(num1,num2));
    break;
  default:
    console.log("invalid operation");
    break;
}

// 4. Convert string to number and number to string.
//string to number
let name="hello";
let strToNum=Number(name);
console.log("strToNum:",strToNum,typeof strToNum);
//number to string
let number=100;
let numToStr=String(number);
console.log("numToStr:",numToStr,typeof numToStr)


// 5. Create an object with your details (name, age, hobby) and print it.
let person={
  name:"John",
  age:21,
  hobby:["reading","graft","coding"],
}
console.log(person);

// 6. Create an array with 5 fruits and print the 3rd fruit.
let fruits=["apple","banana","grapes","orange","kiwi"];
console.log(fruits[3]);

// 7. Write a function that takes a name and prints a greeting message.
function greeting(name="john"){
  if(name ==="undefined"){
    console.log("undefines name")
  }
  console.log(name,'welcome to js');
}
greeting();
// greeting("john");

// 8. Use if-else to check if a number is positive, negative or zero
let num3=-19;
if(num3>0){
console.log(`${num3} is positive`);
}
else if(num3<0){
  console.log(`${num3} is negative`);
}
else{
 console.log(`${num3} is zero`)
}

// 9. Use switch to print day of week based on number (1=Monday).

let day="6";
switch(day){
  case "1":
    console.log("Monday");
    break;
  case "2":
    console.log("Tuesday");
    break;
  case "3":
    console.log("Wednesday");
    break;
  case "4":
    console.log("Thursday");
    break;
  case "5":
    console.log("Friday");
    break;
  case "6":
    console.log("Saturday");
    break;
  case "7":
    console.log("Sunday");
    break;
  default:
    console.log("invalid day");
    break;
}

// 10. Create a simple loop to print numbers 1 to 10.
for(let i=1;i<=10;i++){
  console.log(i);
}



// ■ Advanced 10 Tasks
// 1. Write a function that reverses a string.

function reverseString(str){
  let reversed="";
  for(let i=str.length-1;i>=0;i--){
    reversed+=str[i];
  }
  return reversed;
}
console.log(reverseString("hello")); //olleh

// 2. Create a function that returns the largest number in an array.
let numbers=[20,45,37,10,78];
function largerNumber(arr){
  let n=arr.length;
  let largerNum=arr[0];
  for(let i=1;i<n;i++){
    if(arr[i]>largerNum){
      largerNum=arr[i]; 
    }
  }
  return largerNum;
}
console.log(largerNumber(numbers))

// 3. Write a custom 'myMap' function like Array.map.

let arr=[1,2,3,4,5,6];
let result=arr.map(num=>num*5);
console.log(result);


Array.prototype.myMap = function(numbers){
  let result=[];
  for(let i=0;i<this.length;i++){
    result.push(numbers(this[i],i,this));
  }
  return result;
}
let ans=arr.myMap(function(num){
  return num*3;
});
// let ans=arr.myMap(num=>num*3);
// console.log(ans);


// 4. Create a function to check if a string is palindrome.
let str="madam";
function isPalindrome(str){
  let original=str;
  let reversed="";
  for (i=str.length-1;i>=0;i--){
    reversed+=str[i];
  }
  if(original===reversed){
    return true;
  }
  return false;
}
console.log(isPalindrome(str));


let num=121;
console.log(isPalindrome(num.toString()));
function isNumPalindrome(num){
  let originalNum=num;
  let reversed=0;
  while(num>0){
    let digit=num%10;
    reversed=reversed*10+digit;
      num = Math.floor(num / 10);
  }
  if(originalNum===reversed){
    return true;
  }
  return false;
}
console.log(isNumPalindrome(num));


// 5. Create a function that counts vowels in a string.
let string="Hello,World";
function countVowels(str){
  let count=0;
  let vowels='aeiou';
  for(let char of str){
   if (vowels.includes(char.toLowerCase())) {
     count++;
   }
  }
  return count;
}
console.log(countVowels(string));

// 6. Use ternary operator to check age > 18 and print 'Adult' or 'Minor'.

let age=21;
if(age >18){
  console.log("aduit");
}
else{
  console.log("minor");
}
let result1= age>18?"aduit":"minor";
console.log(result1);

// 7. Create nested object and print one inner property.
let person1 = {
  name: "John",
  age: 21,
  hobby: ["reading", "graft", "coding"],
  address:{
    city:"New York",
    state:"NY",
    country:"USA"
  }
};
console.log(person1.address.city);

// 8. Use forEach to print all elements of an array.
let arr1=[10,20,30,40,50];
arr1.forEach(num=>console.log(num));

// 9. Create a function that sums all numbers in array using reduce
let arr2=[10,20,30,40,50];
function sumArray(arr){
  return arr.reduce(function(acc,curr){
    return acc+curr;
  },0);
}
console.log(sumArray(arr2));
let sum=arr2.reduce((acc,curr)=>acc+curr,0);
console.log(sum);

// 10. Combine two arrays using spread operator.

let array1=[1,2,3];
let array2=[4,5,6];
let combined=[...array1,...array2];
console.log(combined)

let fruits1=["apple","banana"];
let fruits2=["grapes","orange"];
let allFruits=["pineapple",...fruits1,"kiwi","payapa",...fruits2,"mango","strawberry"];
console.log(allFruits)


// ■ Bonus Challenge 10 Tasks
// 1. Build a function that returns factorial of a number

function factorial(n){
  if(n==1||n==0){
    return 1;
  }
  return n*factorial(n-1);
}
console.log(factorial(8));

// 2. Write a function that removes duplicate values from array.
let arr3=[1,2,3,4,1,2,1,2,1,2,1,2,1,2,5,3,2,1,6,7,8,5];
function findDupicates(arr){
   let seen={};
   let result=[];
   for(let i=0;i<arr.length;i++){
    if(!seen[arr[i]]){
      result.push(arr[i]);
      seen[arr[i]]=true;
    }
   }
   return result;
}
console.log(findDupicates(arr3))

// 3. Create a program that sorts numbers ascending and descending.
let arr4=[30,10,50,20,60,40];
//ascending
function sortAsc(arr){

  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }
  }
  return arr;
}
console.log(sortAsc(arr4));
//ascending
function sortDesc(arr){

  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]<arr[j]){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }
  }
  return arr;
}
console.log(sortDesc(arr4));


// 4. Create a function that finds even and odd numbers in array.
let arr5=[1,2,3,4,5,6,7,8,9,10];
function findOddOrEven(arr){
  let even=[];
  let odd=[];
 arr.forEach(num=>{
  if(num%2==0){
    even.push(num);
  }
  else{
    odd.push(num);
  }
 })
 return {even,odd};
}
console.log(findOddOrEven(arr5));

// 5. Write a function to merge two objects into one.
let obj1={
  name:"john",
  age:21,

}
let obj2={
  native:"USA",
  hobby:["reading","coding"]
}
let mergedObj={...obj1,...obj2};
console.log(mergedObj)

// 6. Create a function that takes an array of names and returns only names starting with 'A'
let names=["Alice","Bob","Annie","John","Aron","David"];
function namesStartWithA(arr){
  let result=[];
  arr.forEach(name=>{
    if(name.toUpperCase().startsWith("A")){
      result.push(name);
    }
})
  return result;
}
console.log(namesStartWithA(names));

function namesStartWithA1(arr){
  let result=[];
  for(let i=0;i<arr.length;i++){
    let firstChar=arr[i][0];
    if(firstChar=='A'|| firstChar=='a'){
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(namesStartWithA1(names));


// 7. Create an arrow function to find square of numbers in array.
let arr6=[1,2,3,4,5];
let result2=arr6.map(num=>num*num);
console.log(result2);

function square(num){
   for(let i=0;i<num.length;i++){
    num[i]=num[i]*num[i];
   }
   return num;
}
console.log(square(arr6))

// 8. Use template literals to print your name, age and city.
let myName="john";
let myAge=21;
let myCity="New York";
console.log(`my Nmae is ${myName} , my age is ${myAge} and my city is ${myCity}`);


// 9. Create a function that filters prime numbers in array
let arr7=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function isprime(arrr){
  let arr=[];
 arrr.forEach(num=>{
   if (num < 2) return; // skip 0 and 1
   let isPrime = true;
   for (let i = 2; i*i <= num; i++) {
     if (num % i === 0) {
      isPrime=false;
      break;
     }
     if(isPrime) arr.push(num);
   }
 })
  return arr;
}
console.log(isprime(arr7));


// 10. Write a small project: Convert Celsius to Fahrenheit.

let Celsius=37;
function convertFah(num){
  let Fahrenheit= (num*1.8)+32;
  return Fahrenheit.toFixed(2);
}
console.log(convertFah(Celsius));
function convertKel(num){
  let kelvin=num+273.15;
  return kelvin;
}
console.log(convertKel(Celsius));

