function collectData() {
    const description = document.getElementById('description').value
    const date = document.getElementById('date').value
    const time = document.getElementById('time').value
    const index = getNumberOfTasksInLocalStorage()
    return {
        index,
        description,
        date,
        time,
    }
}

function generateHTML(data) {
    const newHTML = `
        <div class="task">
            <div>
                <img src="assets/images/x.png" onclick="deleteTask(${data.index})">
            </div>
            <div>${data.description}</div>
            <div>${data.date}</div>
            <div>${data.time}</div>
        </div>
    `

    return newHTML
}

function renderHTML(newHTML) {
    const tasksContainer = document.getElementById('tasks')
    tasksContainer.innerHTML += newHTML
}

function deleteFromScreen() {
    const tasksContainer = document.getElementById('tasks')
    tasksContainer.innerHTML = ''
}

function clearForm() {
    const tasksForm = document.getElementById('tasksForm')
    tasksForm.reset()

    const descriptionInput = document.getElementById('description')
    descriptionInput.focus()
}

function saveTaskToStorage(taskObject) {
    const currentTasksInStorageJSON = localStorage.getItem('tasks')
    const currentTasksInStorage = JSON.parse(currentTasksInStorageJSON)
    currentTasksInStorage.push(taskObject)
    localStorage.setItem('tasks', JSON.stringify(currentTasksInStorage))
}

function loadTasksFromLocalStorage() {
    const tasksJSON = localStorage.getItem('tasks')
    if(tasksJSON) {
        const tasks = JSON.parse(tasksJSON)
        for(const task of tasks) {
            const newHTML = generateHTML(task)
            renderHTML(newHTML)
        }
    } else {
        localStorage.setItem('tasks', [])
    }
}

function initStorage() {
    const currentTasksInStorageJSON = localStorage.getItem('tasks')
    if(!currentTasksInStorageJSON) {
        localStorage.setItem('tasks', JSON.stringify([]))
    }
}

function getNumberOfTasksInLocalStorage() {
    return JSON.parse(localStorage.getItem('tasks')).length
}

function addTask(event) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    renderHTML(newHTML)
    saveTaskToStorage(data)
    clearForm()
}

function deleteTask(index) {
    const taskObjectDelete = JSON.parse(localStorage.getItem('tasks'))
    taskObjectDelete.splice(index, 1)
    for(i=0; i<taskObjectDelete.length; i++) {
        taskObjectDelete[i].index = i
    }
    localStorage.setItem('tasks', JSON.stringify(taskObjectDelete))
    deleteFromScreen()
    loadTasksFromLocalStorage()
}


initStorage()
loadTasksFromLocalStorage()