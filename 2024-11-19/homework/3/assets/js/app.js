function collectData() {
    const colorName = document.getElementById('colorName').value
    return {
        colorName: colorName
    }
}

function generateHTML(data) {
    const newHTML = `
    <tr>
        <td>${data.colorName}</td>
        <td style="background-color: ${data.colorName}"></td>
    </tr>`
    return newHTML
}

function renderHTML(newHTML) {
    const colorsContainer = document.getElementById('colorsContainer')
    colorsContainer.innerHTML += newHTML
}

function clearForm() {
    const colorForm = document.getElementById('colorForm')
    colorForm.reset()

    const colorNameInput = document.getElementById('colorName')
    colorNameInput.focus()
}

function saveToStoarge(colorObject) {
    const currentColorsInStoargeJSON = localStorage.getItem('colors')

    let colorsArray;
    if(!currentColorsInStoargeJSON) {
        colorsArray = []
    } else {
        colorsArray = JSON.parse(currentColorsInStoargeJSON)
    }

    colorsArray.push(colorObject)
    localStorage.setItem('colors', JSON.stringify(colorsArray))
}

function addCarToTable(event) {
    const colorNameInput = document.getElementById('colorName')
    const colorName = colorNameInput.value
    if(colorName.length >= 3 && colorName.length <= 20) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    saveToStoarge(data)
    renderHTML(newHTML)
    clearForm()
    } else {
        alert(`Invalid color`)
        colorNameInput.style.background = 'pink'
    }
}

function loadCarsFromaLocalStoarge() {
    const colorsJSON = localStorage.getItem('colors')
    if(colorsJSON) {
        const colors = JSON.parse(colorsJSON)
        for (const color of colors) {
            const newHTML = generateHTML(color)
            renderHTML(newHTML)
        }
    }
}

loadCarsFromaLocalStoarge()

function sum() {
    let p = document.getElementById('p')
    let count = JSON.parse(localStorage.getItem('colors')).length
    p.textContent = ` The amount of the colors in the table: ${count}`;
}

sum()