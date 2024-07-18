document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('form');
    const todoInput = document.getElementById('input');
    const todoList = document.getElementById('list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = '';
    });

    function addTodoItem(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});
