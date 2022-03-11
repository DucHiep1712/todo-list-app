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

//Show tasks from local storage
function showTasks() {
  if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i < tasks.length; i++) {
      var li = document.createElement("li");
      var inputValue = tasks[i].content;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (tasks[i].checks === "checked") {
        li.classList.toggle("checked");
      }
      li.setAttribute("data-before", tasks[i].date);
      var br = document.createElement("br");
      document.getElementById("todo-list").appendChild(li);
      document.getElementById("todo-list").appendChild(br);
    }
  } else {
    tasks = [];
  }
}

showTasks();

//Creating close button
var myList = document.getElementsByTagName("LI");
for (let i = 0; i < myList.length; i++) {
  let span = document.createElement("span");
  span.className = "close";
  span.innerHTML = "<img src='resoures/icons/trash.png'>";
  span.addEventListener("click", function () {
    var div = span.parentElement;
    div.style.display = "none";
    tasks.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    location.href = "index.html";
  });
  myList[i].appendChild(span);
}

//Make check mark on click
var list = document.getElementById("todo-list");
list.addEventListener("click", function (ev) {
  if (ev.target.tagName === "LI") {
    let index = Array.from(list.children).indexOf(ev.target) / 2;
    if (ev.target.classList.contains("checked")) {
      ev.target.classList.remove("checked");
      tasks[index].checks = "unchecked";
    } else {
      ev.target.classList.toggle("checked");
      tasks[index].checks = "checked";
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
