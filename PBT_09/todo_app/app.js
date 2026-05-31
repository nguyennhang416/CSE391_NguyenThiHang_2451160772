// Todo App JavaScript
const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');
const itemsLeft = document.querySelector('#itemsLeft');
const clearCompleted = document.querySelector('#clearCompleted');
const filterButtons = document.querySelectorAll('.filters button');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = '';
  const filtered = todos.filter(todo => {
    if (currentFilter === 'active') return !todo.completed;
    if (currentFilter === 'completed') return todo.completed;
    return true;
  });

  filtered.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'todo-item' + (todo.completed ? ' completed' : '');
    const text = document.createElement('span');
    text.className = 'text';
    text.textContent = todo.text;
    text.addEventListener('click', () => toggleTodo(todo.id));
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
    li.appendChild(text);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
  itemsLeft.textContent = `${todos.filter(t => !t.completed).length} items left`;
}

function addTodo(text) {
  todos.push({ id: Date.now(), text, completed: false });
  saveTodos();
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
  renderTodos();
}

function toggleTodo(id) {
  todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
  saveTodos();
  renderTodos();
}

function clearCompletedTodos() {
  todos = todos.filter(todo => !todo.completed);
  saveTodos();
  renderTodos();
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = todoInput.value.trim();
  if (!value) return;
  addTodo(value);
  todoInput.value = '';
});

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderTodos();
  });
});

clearCompleted.addEventListener('click', clearCompletedTodos);
renderTodos();
