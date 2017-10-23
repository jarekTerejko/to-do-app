// show tasks
function showTasks() {
    tasks.forEach(function (title) {
        addNewTask(title);
        console.log(title);
    });
}

// toggle complete
function toggleTaskComplete(task) {
    task.classList.toggle('btn-success');
}


// delete task
function deleteTask(task) {
    var liToDelete = task.closest('li');
    task.closest('ul').removeChild(liToDelete);
}
