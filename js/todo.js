(function() {
    const todoList = document.getElementById("todoList"); 
    const todoInput = document.getElementById("todoInput");
    const todoButton = document.getElementById("todoButton");
    let activeTodoItem = null;

    function addTodo() {
      if (activeTodoItem) {
        activeTodoItem.firstChild.textContent = todoInput.value; 
        activeTodoItem = null; 
      } else { 
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value; 
        todoList.appendChild(newTodo);
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.addEventListener("click", editTodo);
        newTodo.appendChild(editButton);
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", deleteTodo);
        newTodo.appendChild(deleteButton);
      }
      todoInput.value = "";
    }
  
    function editTodo() {
      activeTodoItem = this.parentNode;
      todoInput.value = activeTodoItem.firstChild.textContent;
    }
  
    function deleteTodo() {
      this.parentNode.remove();
    }
  
    todoButton.addEventListener("click", addTodo);
  })();