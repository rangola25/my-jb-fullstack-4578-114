function collectData() {
    const animalType = document.getElementById('animalType').value
    const animalName = document.getElementById('animalName').value
    const animalAge = document.getElementById('animalAge').value
    const imageURL = document.getElementById('imageURL').value
    return {
        animalType: animalType,
        animalName: animalName,
        animalAge: animalAge,
        imageURL: imageURL
    }
}

function generateHTML(data) {
    const newHTML = `
    <tr class="table-warning">
        <td>${data.animalType}</td>
        <td>${data.animalName}</td>
        <td>${data.animalAge}</td>
        <td><img class="size" src="${data.imageURL}" /></td>
    </tr>`
    return newHTML
}

function renderHTML(newHTML) {
    const animalsContainer = document.getElementById('animalsContainer')
    animalsContainer.innerHTML += newHTML
}

function clearForm() {
    const animalsForm = document.getElementById('animalsForm')
    animalsForm.reset()

    const animalTypeInput = document.getElementById('animalType')
    animalTypeInput.focus()
}

function saveToStoarge(animalObject) {
    const currentAnimalInStoargeJSON = localStorage.getItem('animals')

    let animalsArray;
    if(!currentAnimalInStoargeJSON) {
        animalsArray = []
    } else {
        animalsArray = JSON.parse(currentAnimalInStoargeJSON)
    }

    animalsArray.push(animalObject)
    localStorage.setItem('animals', JSON.stringify(animalsArray))
}

function addCarToTable(event) {
    const animalTypeInput = document.getElementById('animalType')
    const animalNameInput = document.getElementById('animalName')
    const animalAgeInput = document.getElementById('animalAge')
    const imageURLInput = document.getElementById('imageURL')
    const animalType = animalTypeInput.value
    const animalName = animalNameInput.value
    const animalAge = animalAgeInput.value
    const imageURL = imageURLInput.value 
    if (animalAge >= 0 && animalType && animalName && imageURL) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    saveToStoarge(data)
    renderHTML(newHTML)
    clearForm()
    }
    if (!animalType) {
        alert('You have to enter a type of animal')
        animalTypeInput.style.background ='pink'
    }
    if (!animalName) {
        alert('You have to enter the name of the animal')
        animalNameInput.style.background ='pink'
    }
    if (!animalAge || animalAge < 0) {
        alert('You have to enter the age of the animal')
        animalAgeInput.style.background ='pink'
    }
    if (!imageURL) {
        alert('You have to enter the image url')
        imageURLInput.style.background ='pink'
    }
}

function loadCarsFromaLocalStoarge() {
    const animalsJSON = localStorage.getItem('animals')
    if(animalsJSON) {
        const animals = JSON.parse(animalsJSON)
        for (const animal of animals) {
            const newHTML = generateHTML(animal)
            renderHTML(newHTML)
        }
    }
}

loadCarsFromaLocalStoarge()

function resetStorage() {
    localStorage.removeItem('animals');
    document.getElementById('animalsContainer').innerHTML = ''; 
}