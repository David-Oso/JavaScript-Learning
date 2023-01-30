// const todos = ["order cat food", "Clean kithchen", "Buy food", "Do work", "Excercise"]
// console.log(`You have ${todo.length} todos\n`);

// for (let index = 0; index < todo.length; index++) {
//     const element = todo[index];
//     console.log(`Todo ${index +1} -- ${element}`);
    
// }


// todo.splice(2, 1);//Delete the element in the third index
// todo.push("Main");
// todo.shift();
// console.log(todo);

// todo.forEach(function(todo, index){
//     console.log(`${index+1}, ${todo}`);
// });


/*                      CHALLENGE

        1. Convert array to array of objects => text, completed
        2. Create function to remove a todo by text value
 */



const todos = [{
    text:"Order cat food",
    completed: true
},{
    text:"Clean kitchen",
    completed: false
},{
    text:"Buy food",
    completed: true
},{
    text:"Do work",
    completed: false
},{
    text:"Excercise",
    completed: true
}]

const deleteTodo = (todos, todoText) => {
    const index = todos.findIndex((todo) => {
        return todo.text.toLowerCase() === todoText.toLowerCase();
    })
    if(index > -1){
        todos.splice(index, 1);
    }
}
deleteTodo(todos,"buy food");
// console.log(todos);


const getThingsToDo = (todos) => {
    return todos.filter((todo) => {
        return !todo.completed; // return todo.completed === false;
    })
}

console.log(getThingsToDo(todos));
