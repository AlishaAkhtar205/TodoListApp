let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  taskList.forEach((task, index) => {
    list.innerHTML += `
      <li>
        ${task} 
        <span onclick="editTask(${index})">✏️</span>
        <span onclick="deleteTask(${index})">🗑️</span>
      </li>
    `;
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task !== "") {
    taskList.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    taskInput.value = "";
    displayTasks();
  }
}

function deleteTask(index) {
  taskList.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  displayTasks();
}

function editTask(index) {
  const newTask = prompt("Edit task:", taskList[index]);
  if (newTask !== null && newTask.trim() !== "") {
    taskList[index] = newTask.trim();
    localStorage.setItem("tasks", JSON.stringify(taskList));
    displayTasks();
  }
}

displayTasks();
