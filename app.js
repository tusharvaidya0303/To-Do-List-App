const taskInput = document.getElementById("task-input"); // your input id
const addButton = document.getElementById("add-task-btn"); // your button id
const listContainer = document.getElementById("task-list"); // your ul id

// Function to save tasks to local storage
function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

// Function to show tasks from local storage
function showTasks() {
  listContainer.innerHTML = localStorage.getItem("tasks");
}

// Add a new task
addButton.addEventListener("click", () => {
  if (taskInput.value === "") {
    // Display an alert if input is empty
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskInput.value;
    listContainer.appendChild(li);

    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "\u00d7"; // Unicode for the 'x' character
    deleteBtn.className = "delete"; // Add a class for styling
    li.appendChild(deleteBtn);

    // Clear the input field and reset placeholder
    taskInput.value = "";
    taskInput.placeholder = "Add your task";

    saveData();
  }
});

// Handle clicks on list items (check or delete)
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "DELETEBTN") {
    e.target.parentElement.remove();
    saveData();
  }
});

// Load tasks when the page loads
showTasks();
