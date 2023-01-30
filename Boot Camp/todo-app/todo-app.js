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

const incompleteTodo = todos.filter((todo) => {
    return !todo.completed
})

const summary = document.createElement("h2");
summary.textContent = `You have ${incompleteTodo.length} todos left`;
document.querySelector("body").appendChild(summary);

todos.forEach((todo) => {
    const p = document.createElement("p");
    p.textContent = todo.text;
    document.querySelector("body").appendChild(p);
})
