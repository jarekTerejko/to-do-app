// varaibles
var newTaskForm = document.querySelector('.new-task-container form');
var tasksContainer = document.querySelector('.to-do-app-tasks-container ul');

// on DOM load
document.addEventListener('DOMContentLoaded', function () {
    bindAddTaskEvents();
    showTasks();
});
