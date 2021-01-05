function newTodo(){
    let todoList = document.querySelector('.todo_list'),
        newTodoItem = document.createElement('li').classList.add('todo_item'),
        todoCheckbox = document.createElement('input').classList.add('checked'),
        todoLabel = document.createElement('label'),
        todoRemove = document.createElement('button').classList.add('remove');

        todoList.appendChild(newTodoItem);
        todoCheckbox.type = 'checkbox';
        todoLabel.textContent = todoInput.textContent;

        newTodoItem.append(todoCheckbox, todoLabel, todoRemove);
}

let todoInput = document.querySelector('#todo_input');

todoInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      createNewTodo();
    }
    })

function createNewTodo(){
    newTodo();
    todoInput.textContent = "";
}
