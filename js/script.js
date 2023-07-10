const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');
const todoButton = document.getElementById('todoButton');
let activeTodoItem = null;

function addTodoItem() {
    if (activeTodoItem) {
        activeTodoItem.innerText = todoInput.value;
        activeTodoItem = null;
    }else{
        
    }
}