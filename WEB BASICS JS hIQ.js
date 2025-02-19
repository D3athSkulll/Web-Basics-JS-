//day 1 ) 

// LET, VAR, CONST
console.log("hello  world");
//no variable is declared var is inittialised automatically
var age=19
console.log(age)
age=20
console.log(age)
//if Nan comes it represents not a number
{ let date=32
  console.log(date)
}
console.log(date)
{ let date=45;
  date=32;
}
const hel="Shivam"
hel="Prasun"
//error will come no worry

//OPERATORS
1.Arithmetic Operators 
let a = 10, b = 5;

console.log(a + b);  // Addition: 15
console.log(a - b);  // Subtraction: 5
console.log(a * b);  // Multiplication: 50
console.log(a / b);  // Division: 2
console.log(a % b);  // Modulus: 0
console.log(a ** b); // Exponentiation: 100000

2. Logical Operators

let x = true, y = false;

console.log(x && y); // AND: false
console.log(x || y); // OR: true
console.log(!x);     // NOT: false

3. Comparison Operators

let num1 = 10, num2 = 5;

console.log(num1 > num2);   // Greater than: true
console.log(num1 < num2);   // Less than: false
console.log(num1 == "10");  // Equal to (loose equality): true
console.log(num1 === "10"); // Strict equality (checks type too): false
console.log(num1 != num2);  // Not equal to: true
console.log(num1 !== "10"); // Strict inequality: true

The === (strict equality operator) checks both value and data type. Unlike ==, it does not perform type conversion.
1. Comparing Same Data Types
console.log(10 === 10);     // true (Both are numbers and equal)
console.log("Hello" === "Hello"); // true (Both are strings and identical)
console.log(true === true); // true (Both are boolean values and the same)

2. Comparing Different Data Types
console.log(10 === "10");   // false (Number vs. String)
console.log(true === 1);    // false (Boolean vs. Number)
console.log(false === 0);   // false (Boolean vs. Number)
console.log(null === undefined); // false (Different types)


4. Comparing NAN
console.log(NaN === NaN); // false (Special case: NaN is not equal to itself)
console.log(Number.isNaN(NaN)); // true (Correct way to check for NaN)

Why?
Because NAN - undefined number 
 Thus two undefined numbers are not accessible with each other



Examples of Single (=) vs. Double (==) Equals in JavaScript
1. Single Equals (=) → Assignment Operator
let x = 10; // Assigns 10 to x
console.log(x); // Output: 10

let name = "Alice"; // Assigns "Alice" to name
console.log(name); // Output: Alice

2. Double Equals (==) → Loose Equality Operator
Compares values but allows type conversion (coercion).
console.log(5 == "5");  // true  (String "5" is converted to number 5)
console.log(0 == false); // true  (false is converted to 0)
console.log(null == undefined); // true  (Both are treated as "empty" values)

console.log("10" == 10); // true (String "10" is converted to number 10)
console.log("hello" == "hello"); // true (Both are same strings)



//LOOPS AND CONDITIONALS
4.Loops and Conditionals
If else statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

switch Statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Just another day.");
}

3. Loops

for Loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

while Loop
let count = 1;
while (count <= 5) {
    console.log("While Loop Count:", count);
    count++;
}

do-while Loop
let num = 1;
do {
    console.log("Do-While Number:", num);
    num++;
} while (num <= 5);

forEach Loop (for arrays)

const names = ["Alice", "Bob", "Charlie"];

names.forEach(name => console.log(`Hello, ${name}!`));
// Output:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!


//FUNCTIONS

//function to print table
function displaytable(x){
    for(i=1;i<=10;i++){
        console.log(x*i);
    }
    return x
}
displaytable(4);Q
//shortcoming of js
var dmeo = ()=>{
 console.log("hello bacchoo..");
}
dmeo();
//can run but this not a good practice

///ARRAYS
let mixedArray = [42, "hello", true, { name: "John" }, [1, 2, 3]];
console.log(mixedArray);

let arr = [1, 2, 3, 4, 5];

console.log("Original Array:", arr);

// push() - Add 6 to the end
arr.push(6);
console.log("After push(6):", arr);

// pop() - Remove last element
arr.pop();
console.log("After pop():", arr);

// reverse() - Reverse the array
arr.reverse();
console.log("After reverse():", arr);

// sort() - Sort the array
arr.sort(); // Ascending order
console.log("After sort():", arr);

// findIndex() - Find index of first even number
let evenIndex = arr.findIndex(num => num % 2 === 0);
console.log("Index of first even number:", evenIndex);

// find() - Find first even number
let firstEven = arr.find(num => num % 2 === 0);
console.log("First even number:", firstEven);

// indexOf() - Get index of 3
console.log("Index of 3:", arr.indexOf(3));

// includes() - Check if 4 exists
console.log("Includes 4?:", arr.includes(4));

// forEach() - Print each number multiplied by 2
console.log("Using forEach:");
arr.forEach(num => console.log(num * 2));

// map() - Create a new array with each element squared
let squaredArr = arr.map(num => num ** 2);
console.log("After map (squared):", squaredArr);

// reduce() - Sum of elements
let sum = arr.reduce((sum, n) => sum + n);
console.log("Sum using reduce():", sum);

// filter() - Get numbers greater than 2
let filteredArr = arr.filter(num => num > 2);
console.log("After filter (numbers > 2):", filteredArr);

// slice() - Extract elements from index 1 to 3 (not modifying original)
let slicedArr = arr.slice(1, 4);
console.log("After slice(1,4):", slicedArr);
console.log("Original Array:", arr);

// splice() - Remove 2 elements from index 2 
let spliced = arr.splice(2, 2);
console.log("Arr After splice:", arr);
console.log("Removed elements:", spliced);



//  IIFE


//IIFE - immediately invoked function expression
(function add(a,b){
    console.log(a+b);
})(2,3);

// same as creating a new struct and initialising it directly
// type of design pattern which is self executing anonymous function
// used to avoid polluting global namespace

//arrow function example
(()=>{
    console.log("IIFE");
    let a = 10;
    console.log(a);
})();

//HOISTING
// explaining hoisting with the example 
// HOISTING(AT THIS TIME MOVE TO VS CODE)
 var x= 7;
  function getName() {
    console.log("Namaste Javascript");
  }
  getName();
console.log(x);

// it gets executed and the results 
// are function and x value 
//if we put the getName(); and console.log(X) thing above the call stack, then it will 
//show still be executed but the console.log(x) will show undefined why this undefined came 
//later but here
 getName();
 console.log(x);
 var x= 7;
  function getName() {
    console.log("Namaste Javascript");
  }

 //Hoisting is a JavaScript mechanism where variable and function declarations are moved (hoisted) to the top of their scope before code execution.

// 📌 Important: Only declarations are hoisted, not initializations.
// you will ask why  var is shown undefined here 

 
// console.log(x);
// var x = function() {
//     return() =>"fsdgf";
// }


//CALLBACK FUNCTION

// what is a callback function
// so a callback function is a function which can be called back into another function
function greet(name ,callback){
    console.log("hello,"+ name );
callback();}

function sayGoodBye(){
    console.log("GoodBye");
}

greet("Alice",sayGoodbye);

//PROMISES

let myPromise = new Promise((resolve,reject)=>{
    let x=6;
    if(x==1){
        resolve("ok done")
    }
    else{
        reject("error")
    }
})
myPromise.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
//promises 
let p1 = new Promise((resolve) => setTimeout(() => resolve("First done"), 3000));
let p2 = new Promise((resolve) => setTimeout(() => resolve("Second done"), 2000));

Promise.race([p1, p2]).then((result) => console.log(result));

//ASYNC AWAIT

//playing more around with promises
//can go with all and give more parameters in it
//execute an async function
//Async Await 

// what is async?
// what is await?
// how async await works behind the scenes?
//examples of using async/ await
// error handling 

// Difference between an async and normal function?
// So difference between an async and normal function is that 
// Async function always return a promise 
// Matlab even tumne agar
async function getData(){
    return "namaste";
    }
    // It will wrap a value inside the promise then it will return it 
    
    const p = new Promise ((resolve , reject) =>{
    resolve("promise resolved value");
    });
    
    async function getData(){
    return p;
    }
    
    const dataPromise = getData();
    dataPromise.then((res) => console.log(res));

//await is a keyword that can only be used inside an async function



// const p = new Promise ((resolve , reject) =>{
//     setTimeout(() =>{
//         resolve("promise resolved value");
//     }, 10000);
// });

// function getData() {
//     p.then((res) => console.log(res));
//     console.log("namaste");
// }getData();

//using async await
// const p = new Promise ((resolve , reject) =>{
//     setTimeout(() =>{
// resolve("promise resolved value");
//     }, 10000);
//  });
// async function handlePromise() {
//     const val = await p;
//     console.log("namaste");
//     console.log(val);}
//      handlePromise();

// if you want to create your own iterator 

///html  revise
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1 id="abc">asadsao</h1>
//     <div class="text">ASfoqfuqwowrq</div>

//     <button id="btn">Click</button>
//    <script src="script.js"></script> 
// </body>
// </html>

{/* css code */}


{/* h1{
 background-color: aqua;
 font-size:34px;
 font-family: Arial, Helvetica, sans-serif;
 padding-left: 50px;
 margin-left: 25px;
}
.gh{
  background-color:yellow;
  font-size:67px;
}
.den{
    background-color: red;
} */}

// DOM MANIPULATION CODES

const title = document.querySelector('title');
title.innerHTML=`Psasa`;

const div = document.querySelector('.text');


const ab = document.querySelector('#abc');

const button = document.querySelector('#btn');
button.addEventListener('click',()=>{
    const h1= document.createElement('h1');
    h1.innerHTML='Abc';
    div.appendChild(h1);
})



//custom gen
function* makeNewIterator(start,end, step=1){
    for(let i = start; i<= end; i+=step){
        yield i;
    }
}
const one = makeNewIterator(1,10,2);
for(const v of one){
    console.log(v);
}


