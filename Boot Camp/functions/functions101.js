// let greetUser =  function(){
//     console.log("\nWelcome user!\n");
// }

// greetUser();
// greetUser();
// greetUser();

// let square = function(num){
//      return num * num;
// }
// console.log(square(3));
// console.log(square(10));


let convertFahrenitToCelcius =  function(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}
let tempOne = convertFahrenitToCelcius(32);
let tempTwo = convertFahrenitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);