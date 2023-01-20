console.log("working");

let height = 34;
var age = 12
const API_KEY = "1234isfsb09UE";

let firstName = "Dean"
let lastName = "Michael"
console.log(firstName + " " +lastName);
alert(firstName + " " + lastName);

console.log(firstName) 
console.log(age) 
console.log(API_KEY)
console.log(typeof(firstName))
console.log(typeof(lastName))


//Declarative function
function sum(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

//Function as an expression
let sub = function(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

//Arrow function
let add = (firstNumber, secondNumber) =>{
    firstNumber + secondNumber;
}

//Call back function
//This calls a function inside a function
function allTogether(add1, add2){
    return add1(2, 3) + add2(4, 5);
}

