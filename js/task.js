let today = new Date();
let date = document.getElementById("date");
date.innerHTML = today.toDateString();

let tasks = [
  {
    content: "",
    checks: "",
    date: ""
  },
];

//Get tasks from local storage
function getTasks() {
  if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  } else {
    tasks = [];
  }
}

getTasks();

//Creating new task
var taskWritten = document.getElementById("task-done");
taskWritten.addEventListener("click", function () {
  var taskInput = document.getElementById("task-input").value;

  if (taskInput === "") {
    alert("You cannot make a blank task!");
  } else {
    alert("Task added successfully!");
    let timeCreated = new Date().toLocaleTimeString();
    let dateCreated = new Date().toDateString();
    tasks.push({
      content: taskInput,
      checks: "unchecked",
      date: "Created on " + dateCreated + " at " + timeCreated
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    location.href = "index.html";
  }
});
