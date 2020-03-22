// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('#clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task')

// Load event listeners
loadEventListeners();

function loadEventListeners() {
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add task event
    form.addEventListener('submit', addTask);

    // Remove single task
    taskList.addEventListener('click', removeTask);

    // Clear all tasks
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks
    filter.addEventListener('keyup', filterTasks);
}

function getTasks(e) {
    let tasks = checkLS();

    tasks.forEach(function (taskValue) {
        addSingleTask(taskValue);
    });
}

function addTask(e) {
    if (taskInput.value.trim() === '') {
        alert('Task cannot be empty')
        taskInput.value = '';
    } else {
        addSingleTask(taskInput.value);


        // Save task to local storage
        storeTaskInLocalStorage(taskInput.value);

        // Clear the input
        taskInput.value = '';
    }

    e.preventDefault();
}

function addSingleTask(taskValue) {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskValue));
    // Create new link
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    // link.innerHTML = '<i class="fa fa-remove"></i>';
    link.innerText = 'Remove';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
}

function storeTaskInLocalStorage(task) {
    let tasks = checkLS();

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function checkLS() {
    let tasks = localStorage.getItem('tasks');

    if (tasks === null) {
        tasks = ['Walk the dog', 'Buy a milk', 'Go to the cinema'];
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        tasks = JSON.parse(tasks);
    }

    return tasks;
}

function removeTask(e) {
    // const a = e.target.parentElement;
    const a = e.target;
    if (a.classList.contains('delete-item')) {
        if (confirm('Are you sure to delete task?')) {
            a.parentElement.remove();

            removeFromLocalStorage(a.parentElement.firstChild);
        }
    }
}

function removeFromLocalStorage(taskItem) {
    let tasks = checkLS();
    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(e) {
    if (confirm('Are you really want to clear all tasks?')) {
        // taskList.innerHTML = '';

        // Faster way
        while (taskList.firstChild) {
            taskList.firstChild.remove();
        }

        clearTasksFromLocalStorage();
    }
}

function clearTasksFromLocalStorage() {
    localStorage.clear();
}

function filterTasks(e) {
    const filterText = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) {
        const taskValue = task.firstChild.textContent.toLowerCase();
        if (taskValue.indexOf(filterText) !== -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}