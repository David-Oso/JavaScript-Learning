alert("Hello c-13");

function signUpUser(){



let userName = prompt("Enter your username: ");
while(!validateUsername(userName)){
  userName = prompt("Please enter a valid username");
}

if(userName === null){
  return;
}

let password = prompt("Enter your password: ");
while(!validatePassword(password)){
  password = prompt("Please enter a valid password");
}

let confirmPassword = prompt("confirm password")
while(password != confirmPassword){
  confirmPassword = prompt("Password doesn't match\nEnter password again")
}

alert("You successfully signed up")
alert('Username: ', userName, "\nPassword: ", password);
}
signUpUser();


function validateUsername(name){
  if(name === null) return true;
  if(name.length < 10){
    return true;
  }
  return false;
}

function validatePassword(password){
  if(password === null)return false;
  if(password.length > 6){
    return true;
  }
  return false;
}







// while (userName.length > 10) {
//   userName = prompt("userName can not be more than 10 \n Enter userName again");
// }

// let password = prompt("Enter password");
// while (password.length < 6) {
//   Password = prompt(
//     "password can not be less than 6 characters\nEnter your password again ");
// }

// let confirmPassword = prompt("confirm your password");
// while (password !== confirmPassword) {
//   confirmPassword = prompt("password do not match\nEnter your password again");
// }

// // creation of user object
// // user is the variableName
// // userName(is the key): userName(is the value entered)
// let user = {
//   userName: userName,
//   password: password,
//   confirmPassword: confirmPassword,
// };

// //how to print out
// console.log(user);

// // how to create what is going to be in the span in html. by writing all this in  javascript we have selected the span in html
// let userNameSpan = document.getElementById("userNameSpan");
// let passwordSpan = document.getElementById("passwordSpan");
// let confirmpasswordSpan = document.getElementById("confirmpasswordSpan");

// //how to add something to userNameSpan e.t.c
// userNameSpan.innerHTML = user.userName;
// passwordSpan.innerHTML = user.password;
// confirmpasswordSpan.innerHTML = user.confirmPassword;

console.log(document);