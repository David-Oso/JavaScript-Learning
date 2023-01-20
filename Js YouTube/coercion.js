let a = 7;
let b = '6';
b = parseInt(b, 10);
let c = a + b;
console.log("Aswer: "+ c);

let d = parseInt('bob', 10);
console.log(d);//This gives a message NaN meaning (Not a Number)
let e = isNaN(d);
console.log(e);
