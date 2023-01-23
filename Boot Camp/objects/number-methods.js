// let num = 103.941;
// console.log(num.toFixed(2));

// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));


// let min = 10;
// let max = 20;
// let randomNum = Math.floor((Math.random() * (max - min + 1))) + min;
// console.log(randomNum);

let guess = (guess) => {
    let correct = Math.floor(Math.random(5 - 1)) + 1;
    return guess === correct;
}

console.log(guess(1));