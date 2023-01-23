let name = "Andrew Mead";

 console.log(name.length);
 console.log(name.toUpperCase());
 console.log(name.toLowerCase());


 let password = 'abc123passd098';
 console.log(password.includes('password'));

 let word = ' a b c c d d wq     m';
 console.log(word);

 console.log(word.trim());

let isPasswordValid = (password) => {
     return (password.length > 8 && !password.includes("password"))   
}

console.log(isPasswordValid(1235734394));
console.log(isPasswordValid("password1343"));
console.log(isPasswordValid("man111ofWae"));