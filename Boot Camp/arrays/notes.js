
// use push to add element to the end of the array
// use pop to remove element to the end of the array
// use shift to remove element from the beginning of the array
// use unshift to add element from to the beginning of the array

//Calling a function inside a function is a call back function


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

// notes.push("My new note");

// notes.shift();
// notes.unshift("My first note");

// console.log(notes.pop());


// notes.splice(0, 1);
// // using splice to delete from the index 1 of the arrays and delete 1 item

// notes.splice(1, 0, "This is the new item");
// // adding element to index 1 of the array

// notes.splice(1, 1, "Man");
// // start at index 1, delete 1 item and replace it with "Man"


// console.log(notes);
// console.log(notes.length);

// notes.forEach(function() {
//     console.log("testing 123")// Prints testing 123 in the number of elements in the array
// });

// notes.forEach(function(item, index, array) {
//     console.log(item);  //Prints the elements in the array
//     console.log(index); //Prints the index of the elements in the array
//     console.log(array); //Prints the array itself
// });

// console.log(notes.indexOf("Note 2"));
//if the element you are looking for is not in the array, it returns -1 else ite returns the index of the argument




// console.log(notes[4]);
// console.log(notes[notes.length - 1]);

// for (let index = 0; index < notes.length; index++) {
//     const element = notes[index];
//     console.log(element);
// }


// console.log(notes.indexOf({}));

// console.log(notes.findIndex((item, index) => {
//     console.log(notes);
// }));


let man = function(a, b){
    if(a.toLoweCase() < b.toLoweCase()) return -1;
    else if(a.toLoweCase() > b.toLoweCase()) return 1;
    else return 0;
} 
console.log(man("boy", "girl"));


const sortNotes = (notes) => {
    notes.sort((a, b) => {
        if(a.title.toLoweCase() < b.title.toLoweCase()){
            return -1;
        } 
        else if(b.title.toLoweCase() < a.title.toLoweCase()){
            return 1;
        }
        else {return 0}
    })
}


// console.log(sortNotes(notes));

const findIndex = (notes, noteTitle) => {
    return notes.find((note, index) => {

        return note.title === noteTitle;
    })
}


const findNotes = function(notes, query){
    return notes.filter(function(note, index){
        const isTitleMatch = note.title.includes(query);
        const isBodyMatch = note.body.includes(query);
        return isTitleMatch || isBodyMatch;
    })

    }


// console.log(findNotes(notes, "Eating"));


// const findIndex = (notes, noteTitle) => {
//     const index = notes.findIndex((note, index) => {

//         return note.title === noteTitle;
//     }) 
//     return notes[index];
// }


const note = findIndex(notes, "Office modification")
// console.log(note);