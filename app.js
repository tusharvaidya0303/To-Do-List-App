const taskInput = document.getElementById("task-input"); 
const addButton = document.getElementById("add-task-btn"); 
const listContainer = document.getElementById("task-list"); 

// Save tasks
function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

// Show tasks
function showTasks() {
  listContainer.innerHTML = localStorage.getItem("tasks");
}

// Add new task
addButton.addEventListener("click", () => {
  const value = taskInput.value.trim();
  if (!value) {
    alert("You must write something!");
    return;
  }

  // Create list item
  let li = document.createElement("li");
  li.style.display = "flex";   // flex to align check, text, delete
  li.style.alignItems = "center";

  // ✅ Check button
  let checkBtn = document.createElement("span");
  checkBtn.innerHTML = "✔";
  checkBtn.className = "check";
  checkBtn.style.marginRight = "10px"; // space between check and text
  li.appendChild(checkBtn);

  // Task text
  let taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.innerHTML = value;
  li.appendChild(taskText);

  // ❌ Delete button
  let deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "\u00d7";
  deleteBtn.className = "delete";
  deleteBtn.style.marginLeft = "auto"; // push delete to the right
  li.appendChild(deleteBtn);

  // Add to list
  listContainer.appendChild(li);

  // Clear input
  taskInput.value = "";
  taskInput.placeholder = "Add your task";

  saveData();
});

// Handle clicks
listContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("check")) {
    e.target.parentElement.classList.toggle("checked");
    saveData();
  } else if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    saveData();
  }
});

// Load tasks
showTasks();