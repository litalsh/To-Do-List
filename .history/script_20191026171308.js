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

const todoInput = document.querySelector('#todo_input');

todoInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && todoInput.value != '') {
      createNewTodo();
    }
    })

function createNewTodo(){
    newTodo();
    todoInput.value = "";
}

const removeBtns = document.querySelectorAll('.remove');
for (const removeBtn of removeBtns) {
    removeBtn.addEventListener('click', function(event) {
        this.parentNode.remove();
  })
}

for (var i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', function(e) {
      e.currentTarget.parentNode.remove();
      //this.closest('.single').remove() // in modern browsers in complex dom structure
      //this.parentNode.remove(); //this refers to the current target element 
      //e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }, false);
  }