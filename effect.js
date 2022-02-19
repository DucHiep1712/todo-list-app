let today = new Date();
let date = document.getElementById("date");
let tasks = [];
date.innerHTML = today.toDateString();

//Show tasks from local storage
function showTasks() {
  if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  for (let i = 0; i < tasks.length; i++) {
    var li = document.createElement("li");
    var inputValue = tasks[i];
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("task-container").appendChild(li);
  }
}

showTasks();

//Creating close button
var myList = document.getElementsByTagName("LI");
for (let i = 0; i < myList.length; i++) {
  let span = document.createElement("span");
  span.className = "close";
  span.innerHTML = "<img src='resoures/icons/trash.png'>";
  myList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    tasks.splice(i, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
}

//Make check mark on click
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
