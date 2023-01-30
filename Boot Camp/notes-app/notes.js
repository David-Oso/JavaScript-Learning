
const notes = [{
    title: "My next trip",
    body: "I would like to go to splain"
}, {
    title: "Habits to work on",
    body: "Excercise, Eating a bit better"

}, {
    title: "Office modification",
    body: "Get a new seat"

}];




const d = document.querySelectorAll("p");
d.forEach(function(p){
    p.textContent ="*******"
    console.log(p.textContent);
})


const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new element from java script";


document.querySelector("body").appendChild(newParagraph)