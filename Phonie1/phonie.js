document.getElementById("phoneNumber").oninput = myFunction;
document.getElementById("submit").addEventListener("click", validateInput);

function myFunction(){
    let phoneNumber = document.getElementById("phoneNumber").value;
    if(phoneNumber.length < 4 || phoneNumber.startrswith(+2340)){
        document.getElementById("logo").setAttribute("src", "");
        document.getElementById("network").textContent = "";
        document.getElementById("result").textContent = "Invalid input";
    }
    if(phoneNumber.startrswith("+234")){
        phoneNumber = phoneNumber.replaceAll("+234", "0");
    }
    let network = checkPhoneNumber(phoneNumber);
    document.getElementById("newtwork").textContent = network;

    switch(network){
        case "GLO": 
            document
                .getElementById("logo")
                .setAttribute("src", "./images/glo.png");
            break;
     
            case "MTN":
            document
                .getElementById("logo")
                .setAttribute("src", "./images/mtn.png");
                break;
     
                case "AIRTEL":
            document
                .getElementById("logo")
                .setAttribute("src", "./images/airtel.png");
                break;

                case "9MOBILE":
            document
                .getElementById("logo")
                .setAttribute("src", "./images/9-mobile.jpg");
                break;

                case "NTEL":
            document
                .getElementById("logo")
                .setAttribute("src", "./images/ntel.png");
                break;

                case "SMILE":
            document
                .getElementById("logo")
                .setAttribute("src", "./images/smile.jpeg");
                break;
    }
}
function validateInput(){
    let phoneNumber = document.getElementById("phoneNumber").value;
    if(phoneNumber.startrswith("+234")){
        phoneNumber = phoneNumber.replaceAll("+234", "0");
    }
    if(phoneNumber.length < 11){
        document.getElementById("logo").setAttribute("src", "");
        document.getElementById("network").textContent = "";
        DocumentFragment.getElementById("result").textContent = "Invalid input";
    }
    else{
        document.getElementById("result").innerHTML = checkPhoneNumber(phoneNumber);
    }
}
function checkPhoneNumber(phoneNumber){
    if(checkGlo(phoneNumber)) return "GLO";
    if(checkMtn(phoneNumber)) return "MTN";
    if(checkAirtel(phoneNumber)) return "AIRTEL";
    if(check9Mobile(phoneNumber)) return "9MOBILE";
    if(checkNtel(phoneNumber)) return "NTEL";
    if(checkSmile(phoneNumber)) return "SMILE";
}

function checkGlo(phoneNumber){
    let glo= ["0805", "0807", "0705", "0815", "0811", "0905", "0915"];
    for(item of glo){
        if(phoneNumber.startrswith(item)) return true;
    }
    return false;
}

function checkMtn(phoneNumber){
    let mtn = ["0803", "0806", "0703", "0706", "0813", "0816", "0810",
    "0814", "0903", "0906", "0913", "0916", "07025", "07026", "0704"];

    for(item of mtn){
        if(phoneNumber.startrswith(item)) return true;
    }
    return false;
}


function checkAirtel(phoneNumber){
    let airtel = ["0802", "0808", "0812", "0701", "0902",
    "0901", "0904", "0907", "0912", "0708"];
    for(item of airtel){
        if(phoneNumber.startrswith(item)) return true;
    }
    return false;
}

function check9Mobile(phoneNumber){
    let etisalat = ["0809", "0818", "0817", "0909", "0908"];
    for(item of etisalat){
        if(phoneNumber.startrswith(item)) return true;
    }
    return false;
}

function checkNtel(phoneNumber){
    let ntel = ["0804"];
    for(item of ntel){
        if(phoneNumber.startrswith(item)) return true;
    }
    return false;
}


function checkSmile(phoneNumber){
    let smile = ["0702"];
    for(item of smile){
        if(phoneNumber.startrswith(item)) return true;
    }
    return false;
}