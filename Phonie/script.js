let userDetails ={
    firstName: "",
    lastName: "",
    phoneNumber: "",
};

document.getElementById("form").onsubmit = (e) => {0
    e.preventDefault();

let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let phoneNumber = document.getElementById("pnumber");
let result = document.getElementById("result");
let img = document.getElementById("img");


let firstNameValue = firstName.value;
let lastNameValue = lastName.value;
let phoneNumberValue = phoneNumber.value;

if(phoneNumberValue.length === 11){
    if(
        phoneNumberValue.startsWith("0803") || phoneNumberValue.startsWith("0806") ||    
        phoneNumberValue.startsWith("0703") || phoneNumberValue.startsWith("0700") ||
        phoneNumberValue.startsWith("0810") || phoneNumberValue.startsWith("0813") ||
        phoneNumberValue.startsWith("0814") || phoneNumberValue.startsWith("0816") ||
        phoneNumberValue.startsWith("0903") || phoneNumberValue.startsWith("0906") 

    ){
        img.setAttribute(
            "src",
            "./images/mtn.png"
        );
        result.textContent = "MTN"
        console.log("Phone number MTN")
    }
    else if(
        phoneNumberValue.startsWith("0805") || phoneNumberValue.startsWith("0807") ||
        phoneNumberValue.startsWith("0811") || phoneNumberValue.startsWith("0705") ||
        phoneNumberValue.startsWith("0815") || phoneNumberValue.startsWith("0905")

    ){
        img.setAttribute(
            "src",
            "./images/glo.png"
        );
        result.textContent = "GLO"
        console.log("Phone number GLO")
    }
    else if(
        phoneNumberValue.startsWith("0802") || phoneNumberValue.startsWith("0808") ||
        phoneNumberValue.startsWith("0812") || phoneNumberValue.startsWith("0701") ||
        phoneNumberValue.startsWith("0708") || phoneNumberValue.startsWith("0902") ||
        phoneNumberValue.startsWith("0907") || phoneNumberValue.startsWith("0901")
    ){
        img.setAttribute(
            "src",
            "./images/airtel.png"
        );
        result.textContent = "AIRTEL"
        console.log("Phone number AIRTEL")
    }
    else if(
        phoneNumberValue.startsWith("0809") || phoneNumberValue.startsWith("0817") ||
        phoneNumberValue.startsWith("0818") || phoneNumberValue.startsWith("0908") ||
        phoneNumberValue.startsWith("0909")
    ){
        img.setAttribute(
            "src",
            "./images/9-mobile.jpg"
    );
        result.textContent = "9mobile"
        console.log("Phone number: 9mobile")
    }
    else if(
        phoneNumberValue.startsWith("0804")
    ){
        img.setAttribute(
            "src",
            "./images/ntel.png"
        );
        result.textContent = "NTEL"
            console.log("Phone number: NTEL")
    }
    else if(
        phoneNumberValue.startsWith("0702")
    ){
        img.setAttribute(
            "src",
            "./images/smile.jpeg"
        );
        result.textContent = "SMILE"
        console.log("Phone number: SMILE")
    }
}else result.textContent = "Input a valid phone number";
}