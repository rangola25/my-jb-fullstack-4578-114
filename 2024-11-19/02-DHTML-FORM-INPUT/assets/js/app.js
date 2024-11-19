function collectData() {
    const carName = document.getElementById('carName').value
    const engineVolume = document.getElementById('engineVolume').value
    const carColor = document.getElementById('carColor').value
    const imageURL = document.getElementById('imageURL').value
    return {
        carName: carName,
        engineVolume: engineVolume,
        carColor: carColor,
        imageURL: imageURL
    }
}

function generateHTML(data) {
    const newHTML = `
    <tr style="background-color: ${data.carColor}">
        <td>${data.carName}</td>
        <td>${data.engineVolume}</td>
        <td><img src="${data.imageURL}" /></td>
    </tr>`
    return newHTML
}

function renderHTML(newHTML) {
    const carsContainer = document.getElementById('carsContainer')
    carsContainer.innerHTML += newHTML

}

function clearForm() {
    // const carName = document.getElementById('carName')
    // const engineVolume = document.getElementById('engineVolume')
    // carName.value = ''
    // engineVolume.value = ''
    const carForm = document.getElementById('carForm')
    carForm.reset()

    const carName = document.getElementById('carName')
    carName.focus()
}

function saveToStoarge(carObject) {
    const currentCarsInStoargeJSON = localStorage.getItem('cars')

    let carsArray;
    if(!currentCarsInStoargeJSON) {
        carsArray - []
    } else {
        carsArray = JSON.parse(currentCarsInStoargeJSON)
    }

    carsArray.push(carObject)
    localStorage.setItem('cars', JSON.stringify(carsArray))
}

function addCarToTable(event) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    saveToStoarge(data)
    renderHTML(newHTML)
    clearForm()
}

function loadCarsFromaLocalStoarge() {
    const carsJSON = localStorage.getItem('cars')
    if(carsJSON) {
        const cars = JSON.parse(carsJSON)
        for (const car of cars) {
            const newHTML = generateHTML(cars)
            renderHTML(newHTML)
        }
    }
}

loadCarsFromaLocalStoarge()