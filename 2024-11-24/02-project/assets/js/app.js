function collectData() {
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
  let index = tasksArray.length;
  return {
    index,
    description,
    date,
    time,
  };
}

function generateHTML(data) {
  const newHTML = `
            <div class="task unvisible" id="${data.index}">
            <button class="glyphicon glyphicon-remove-sign" onclick="deleteTask(${data.index})"></button>
            <div class="descriptionWrite">${data.description}</div>
            <div class="dateWrite">${data.date}</div>
            <div class="timeWrite">${data.time}</div>
        </div>`;
  return newHTML;
}

function renderHTML(newHTML) {
  let taskContainer = document.getElementById("tasks");
  taskContainer.innerHTML += newHTML;
}

function deleteAllTasksFromScreen() {
  let taskContainer = document.getElementById("tasks");
  taskContainer.innerHTML = "";
}

function clearForm() {
  const tasksForm = document.getElementById("taskForm");
  tasksForm.reset();

  const description = document.getElementById("description");
  description.focus();
}

function saveTaskToStorage(taskObject) {
  const currentTasksInStorageJSON = localStorage.getItem("tasks");
  const currentTasksInStorage = JSON.parse(currentTasksInStorageJSON);
  if (!currentTasksInStorage) {
    currentTasksInStorage = [];
  }
  currentTasksInStorage.push(taskObject);
  localStorage.setItem("tasks", JSON.stringify(currentTasksInStorage));
}

function loadTasksFormaLocalStorage() {
  const tasksJSON = localStorage.getItem("tasks");
  if (tasksJSON) {
    const tasks = JSON.parse(tasksJSON);
    for (const task of tasks) {
      let dateTimeString = task.date + "T" + task.time + ":00";
      let dateObject = new Date(dateTimeString);
      let now = new Date();
      if (dateObject > now) {
        const newHTML = generateHTML(task);
        renderHTML(newHTML);
      }
    }
  }
}

function initStorage() {
  const currentTasksInStorageJSON = localStorage.getItem("tasks");
  const currentTasksInStorage = JSON.parse(currentTasksInStorageJSON);
  if (!currentTasksInStorage) {
    localStorage.setItem("tasks", JSON.stringify([]));
  }
}

function addTask(event) {
  event.preventDefault();
  const data = collectData();
  let dateTimeString = data.date + "T" + data.time + ":00";
  let dateObject = new Date(dateTimeString);
  let now = new Date();
  if (dateObject > now) {
    const newHTML = generateHTML(data);
    saveTaskToStorage(data);
    renderHTML(newHTML);
    clearForm();
    const element = document.getElementById(data.index);
    element.classList.add("visible2");
  }
}

function deleteTask(index) {
  let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
  tasksArray.splice(index, 1);
  for (i = 0; i < tasksArray.length; i++) {
    tasksArray[i].index = i;
  }
  deleteAllTasksFromScreen();
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
  loadTasksFormaLocalStorage();
  fadeInElement();
}


initStorage()
loadTasksFormaLocalStorage();

function fadeInElement() {
  const element = document.getElementById("tasks");
  element.classList.add("visible");
  const children = element.children; // This gets all child elements
  
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    child.classList.remove("unvisible");
  }
}

fadeInElement();