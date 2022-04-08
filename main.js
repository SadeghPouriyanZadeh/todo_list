import bulmaCalendar from "/node_modules/bulma-extensions/bulma-calendar/dist/bulma-calendar.min.js";

let btn = document.getElementById("addButton");
let list = document.getElementById("todoList");
let todoTextBox = document.getElementById("todoTextBox");

function addItem(e) {
  let content = todoTextBox.value;
  if (content.length > 0) {
    let li = document.createElement("li");
    li.innerHTML = content;
    list.appendChild(li);
    todoTextBox.value = "";
  }
}

function handleKeyPress(e) {
  if (e.keyCode === 13) {
    addItem();
  }
}

todoTextBox.addEventListener("keypress", handleKeyPress);
btn.addEventListener("click", addItem);
