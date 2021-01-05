function newTodo(){
    let todoList = document.querySelector('todo_list'),
        todoItem = document.querySelector('.todo_item'),
        newTodoItem = document.createElement('li'),
        checked = document.querySelector('.checked'),
        todoCheckbox = document.createElement('input'),
        todoLabel = document.createElement('label'),
        remove = document.querySelector('.remove'),
        todoRemove = document.createElement('button');

        newTodoItem.classList.add('todoItem');
        todoList.appendChild(newTodo);
        todoCheckbox.type = 'checkbox';
        todoCheckbox.classList.add(checked);
        todoRemove.classList.add(remove);

        newTodoItem.append(todoCheckbox, todoLabel, todoRemove);
        todoLabel.textContent = todoInput.textContent;
}

let todoInput = document.querySelector('#todo_input');

todoInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.newTocreateNewTododo();
    })

function createNewTodo(){
    newTodo();
    todoInput.textContent = "";
}
