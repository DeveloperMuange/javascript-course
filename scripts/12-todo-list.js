// When loading the page, load from localStorage.
const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'Make dinner',
  dueDate: '12-22-2022'
}, {
  name: 'Wash dishes',
  dueDate: '12-22-2022'
}];

renderTodoList();

function renderTodoList (){
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        })
      });
}



document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate,
  });

  inputElement.value = '';
  renderTodoList();
   // Whenever we update the todo list, save in localStorage.
   saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
