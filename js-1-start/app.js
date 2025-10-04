//baiscs

// hello world
var greetings;
greetings="Hello,Wolrd!";
console.log(greetings)

//add two numbers
let a=10;
let b=5;
let c= a+b;
console.log(c);

//display name and age
let name="kiruthiga";
let age=21;
console.log("My name is",name);
console.log("my age is",age);

//calculate are of the rectangle
let length=4;
let width=5;
let area=length*width;
console.log("area of the rectangle is:",area)

//current year
let currentDate=new Date();
let currenYear=currentDate.getFullYear();
console.log(currenYear);


// intermediate

//current age using birth year
let birthyear=2004;
let currentYear1=new Date().getFullYear();
let age1=currentYear1-birthyear;
console.log("my age is:",age1);

//calculator

let num1=10;
let num2=5;
//addition
let sum=num1+num2;
console.log(`sum of ${num1} and ${num2} is`,sum);
//sub
let sub=num1-num2;
console.log(`sub of ${num1} and ${num2} is`, sub);
//mul
let mul=num1*num2;
console.log(`mul of ${num1} and ${num2} is`, mul);
//div
let div=num1/num2;
console.log(`div of ${num1} and ${num2} is`, div);
let rem = num1 % num2;
console.log(`rem of  ${num1} and ${num2} is`, rem);


//celsius to fahrenheit
let celsius = 9;
let fahrenheit=(celsius*1.8)+32;
console.log("fahrenheit value is:",fahrenheit);

// Write code that determines if a number is positive, negative, or zero
let number=34;
if(number>0){
   console.log(`the number ${number} is positive`);
}
else if(number<0){
     console.log(`the number ${number} is negative`);
}
else if(number==0){
     console.log(`the number ${number} is zero`);
}


//Create a program that calculates the perimeter and area of a circle given its radius
const pi=3.14;
let radius=2;
let peri=2*pi*radius;
let area1=pi*radius*radius;
console.log(`perimeter of the circle of raidus ${radius} is:`,peri);
console.log(`area of the circle of raidus ${radius} is:`, area1);

//Advanced (5 tasks)
//1. Build a grade calculator that converts numerical scores to letter grades (A, B, C, D,F)
let score=75;
var grade;
if(score>90){
  grade='A';
}
else if(score>=75&& score <90){
    grade='B';
}
else if(score >=50 && score<75){
  grade='C';
}
else if(score >=35 && score <50){
    grade='D';
}
else if(score<35){
    grade='E';
}
else{
    grade=0;
}
console.log(`your grade for ur score ${score} is:`,grade);

//2. Create a program that validates if a given year is a leap year
let year=2000;
if((year%400===0)||(year%4===0 && (year%100===0))){
    console.log(`the enter year ${year} is leap year`)
}
else{
    console.log(`the enter year ${year} is not leap year`);
}

//3.Write a BMI (Body Mass Index) calculator that also categorizes the result(underweight, normal, overweight, obese)
let weight=Number(prompt("enter your weight"));
let height=Number(prompt("enter your height"));
let BMI=weight/(height*height);
BMI=BMI.toFixed(2);
let categorizes;
if(BMI<18.5){
    categorizes="Underweight";
}
else if(BMI>=18.5&&BMI<=24.9){
    categorizes="Normal";
}
else if(BMI>=25 && BMI<=29.9){
    categorizes="overweight";
}
else{
    categorizes="Obese";
}
console.log(`your BMI Of ur wright ${weight} and height ${height} is ${BMI} and ur categorize is `,categorizes);

//4. Build a simple tip calculator that calculates the tip and total bill based on service quality
let bill=Number(prompt('enter the bill amount'));
let service=prompt('enter the service form this (excellent,best,good,average,bad)').toLowerCase();
let tipPercent;
if(service==="excellent"){
    tipPercent=1.0;
}
else if(service=="best"){
    tipPercent=0.15;
}
else if(service=="good"){
    tipPercent=0.8;
}
else if(service="average"){
    tipPercent=0.5;
}
else if(service="bad"){
    tipPercent=0;
}
else{
    tipPercent=0;
}
let tip=bill+tipPercent;
let total=bill*tipPercent;
console.log(`tip amount is: ${tip}`);
console.log(`tip percentage is:${total}`);

//5.Create a program that generates a simple multiplication table for any given number
let table=Number(prompt("enter the table number"));
for(i=1;i<=10;i++){
    ans=i*table;
    console.log(`${i}*${table}=${ans}`);
}


