let numbers = new Array();
numbers.push(1);
numbers.push("Hello")
console.log(numbers);

let names = ["Glory", "Michael", "Tolu", "Ernest"]
names.forEach((name) =>  console.log(name));
let newNames = names.map((name) => "Hello" + name);
console.log(newNames);

let userMap = new Map();

let user1 = {
    school: "Semicolon",
    cohort: 13
}

let userObject = {
    "name" : "Tayo",
    age : 15,
    gender: "male",
    height: "6'4",
    user1: "Native"
};

console.log(userObject);

userMap.set("one", "uno");
userMap.set(userObject, user1)

for ( let i of userMap.keys()){
    console.log(i);
}
