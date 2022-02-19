let today = new Date();
let date = document.getElementById("date");
let tasks = [];
date.innerHTML = today.toDateString();

//Get tasks from local storage
function getTasks() {
  if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
}

getTasks();

//Creating new task
var taskWritten = document.getElementById("task-done");
taskWritten.addEventListener("click", function newTask() {
  var taskInput = document.getElementById("task-input").value;

  if (taskInput === "") {
    alert("You cannot make a blank task!");
  } else {
    alert("Task added successfully!");
    tasks.push(taskInput);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    location.href = "https://duchiep1712.github.io/todo-list-app/";
  }
});
