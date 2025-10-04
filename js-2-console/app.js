// 2-console (Console Methods & Debugging)



// Basic (5 tasks)
// 1. Use console.log() to display three different data types (string, number, boolean)
let name="Vijay";
console.log(typeof(name));
let age=20;
console.log(typeof(age));
let gpa=8.49;
console.log(typeof(gpa));
let condition=true;
console.log(typeof(condition));

// 2. Practice using console.error() to display an error message
let test;
test="hello";
console.error(test);

//3.Use console.warn() to show a warning message

let warn="its me warning from js"
console.warn(warn);

// 4. Display multiple values in a single console.log() statement
let a=['hello',15,true,null]
console.log(a);

// 5. Use console.clear() to clear the console after displaying some messages

let welcome="welcome...!"
console.log(welcome)
// setTimeout(()=>{
// console.clear()
// },3000);

// Intermediate (5 tasks)

// 1. Use console.table() to display an array of student objects with names and grades
let fruits=['banana','mango','grapes','strawberry']
console.table(fruits);

// 2. Implement console.time() and console.timeEnd() to measure how long a loop takes
console.time("loop");
for(i=0;i<1000;i++){
    console.log(i);
}
console.timeEnd("loop");

// 3. Use console.assert() to validate that a calculation is correct
let sum=10+5;
console.assert(sum===10,'sum is wrong');
console.log(sum);

// 4. Create a debugging session using console.group() and console.groupEnd()
console.group("user info");
console.log("name:vijay");
console.log("age:20");
console.log("role:hero");
console.groupEnd("finished");

// 5. Use console.count() to track how many times a function is called
function add(a,b){
    console.count("add function is called")
     console.log(a+b);
}

add(4,5);
add(10,20);
add(2,4);
add(10000,2);


// Advanced (5 tasks)
// 1. Build a custom logger function that timestamps all console messages

function logger(message1){
    let now = new Date().toLocaleString();
    console.log(`[${now}] ,${message1}`);
}
logger("helloooooo");
logger("world...!");


