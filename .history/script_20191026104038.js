function newTodo(){
    let todoList = document.querySelector('.todo_list'),
        todoItem = document.querySelector('.todo_item'),
        newTodoItem = document.createElement('li'),
        //checked = document.querySelector('.checked'),
        todoCheckbox = document.createElement('input'),
        todoLabel = document.createElement('label'),
        //remove = document.querySelector('.remove'),
        todoRemove = document.createElement('button');

        newTodoItem.classList.add('todo_Item');
        todoList.appendChild(newTodoItem);
        todoCheckbox.classList.add('checked');
        todoCheckbox.type = 'checkbox';
        todoRemove.classList.add('remove');
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
