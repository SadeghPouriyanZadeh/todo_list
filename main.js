let addButton = document.getElementById("addButton");
let list = document.getElementById("todoList");
let todoTextBox = document.getElementById("todoTextBox");
let removeButton = document.getElementById("removeButton");
let changeModeButton = document.getElementById("changeModeButton");
let isNight = true;
let themeLink = document.getElementById("bulmaswatch-css");
console.log(themeLink.href);
let lightThemeHref = "https://unpkg.com/bulmaswatch/flatly/bulmaswatch.min.css";
let darkThemeHref = "https://unpkg.com/bulmaswatch/darkly/bulmaswatch.min.css";

function addItem(e) {
  let content = todoTextBox.value;
  if (content.length > 0) {
    let li = document.createElement("li");
    li.innerHTML = content;
    list.appendChild(li);
    todoTextBox.value = "";
  }
}

function deleteItem(e) {
  let item = e.target;
  list.removeChild(item);
}

function changeMode(e) {
  if (isNight) {
    isNight = false;
    changeModeButton.innerHTML = "🌙";

    themeLink.href = lightThemeHref;
  } else {
    isNight = true;
    changeModeButton.innerHTML = "☀";

    themeLink.href = darkThemeHref;
  }
}

function handleKeyPress(e) {
  if (e.keyCode === 13) {
    addItem();
  }
}

todoTextBox.addEventListener("keypress", handleKeyPress);
addButton.addEventListener("click", addItem);
list.addEventListener("click", deleteItem);
removeButton.addEventListener("click", deleteItem);
changeModeButton.addEventListener("click", changeMode);
