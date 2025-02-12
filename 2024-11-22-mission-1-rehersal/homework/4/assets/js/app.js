function collectData() {
    const imageDescriptionInput = document.getElementById('imageDescription').value
    const urlInput = document.getElementById('url').value
    return {
        imageDescription: imageDescriptionInput,
        url: urlInput
    }
}

function generateHTML(data) {
    const newHTML = `
    <tr scope="row>
        <th scope="row"></th>
        <td>${data.imageDescription}</td>
        <td><img class="size" src="${data.url}" /></td>
    </tr>`
    return newHTML
}

function renderHTML(newHTML) {
    const picturesContainer = document.getElementById('picturesContainer')
    picturesContainer.innerHTML += newHTML
}

function clearForm() {
    const pictureForm = document.getElementById('pictureForm')
    pictureForm.reset()

    const imageDescription = document.getElementById('imageDescription')
    imageDescription.focus()
}

function saveToStoarge(pictureObject) {
    const currentPicturesInStoargeJSON = localStorage.getItem('pictures')

    let picturesArray;
    if(!currentPicturesInStoargeJSON) {
        picturesArray = []
    } else {
        picturesArray = JSON.parse(currentPicturesInStoargeJSON)
    }

    picturesArray.push(pictureObject)
    localStorage.setItem('pictures', JSON.stringify(picturesArray))

    let p = document.getElementById('p')
    let count = JSON.parse(localStorage.getItem('pictures')).length
    p.textContent = `${count}`; 
}

function addCarToTable(event) {
    const imageDescriptionInput = document.getElementById('imageDescription')
    const urlInput = document.getElementById('url')
    const imageDescription = imageDescriptionInput.value
    const url = urlInput.value
    if (imageDescription && url) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    saveToStoarge(data)
    renderHTML(newHTML)
    clearForm()
    } 
    if (!imageDescription) {
        alert('You have to fill the image description')
        imageDescriptionInput.style.background = 'pink'
    }
    if (!urlInput) {
        alert('Invalid url')
        urlInput.style.background = 'pink'
    }
}

function loadCarsFromaLocalStoarge() {
    const picturesJSON = localStorage.getItem('pictures')
    if(picturesJSON) {
        const pictures = JSON.parse(picturesJSON)
        for (const picture of pictures) {
            const newHTML = generateHTML(picture)
            renderHTML(newHTML)
        }
    }
}

loadCarsFromaLocalStoarge()

function resetStorage() {
    localStorage.removeItem('pictures'); // Clears only the pictures data
    document.getElementById('picturesContainer').innerHTML = ''; // Clears the table contents
}
