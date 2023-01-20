const submitbutton = document.querySelector(".submit-button");
let value = "";
submitbutton.addEventListener("click", () => {
    const commentbutton = document.querySelector(".comment-button");

    let commentValue = document.querySelector(".comment-button").value;

    commentValue = commentValue.replace("fuck", "f*ck");
    commentValue = commentValue.replace("stupid", "st*p*d");
    commentValue = commentValue.replace("mad", "m*d");
    commentValue = commentValue.replace("whore", "wh*r*");


    document.querySelector(".comment-button").value = "";
    
    let newNode = document.createElement("button");
    let newLine = document.createElement("br");
    newNode.style.backgroundColor = "goldenrod";

    newNode.innerText = commentValue;
    document.body.append(newNode);
    document.body.append(newLine);    
});