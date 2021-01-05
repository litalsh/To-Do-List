function newTodo(){
    let todoList = document.querySelector('.todo_list'),
        newTodoItem = document.createElement('li'),
        todoCheckbox = document.createElement('input'),
        todoLabel = document.createElement('label'),
        todoRemove = document.createElement('button');

        newTodoItem.classList.add('todo_item');
        todoList.appendChild(newTodoItem);
        todoCheckbox.classList.add('checked');
        todoCheckbox.type = 'checkbox';
        todoRemove.classList.add('remove');
        todoRemove.textContent = 'X';
        todoLabel.textContent = todoInput.value;

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
    todoInput.value = "";
}
