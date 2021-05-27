// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = socument.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);
}

// Add task
