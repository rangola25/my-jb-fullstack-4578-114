function populate() {
    const animals = ['dog', 'cat', 'horse']

    const container = document.getElementById('container')

    for(const animal of animals) {
    container.innerHTML += `<li>${animal}</li>`
}
}

function populateImages() {
    const images = [
        'elephent.jpg', 'monkey.jpg'
    ]

    const container = document.getElementById('imagesContainer')

    let newHtml = ''
    for(const image of images) {
        newHtml += `<img src="assets/images/${image}" />`
    }

    container.innerHTML = newHtml
}

function addFruit() {
    const container = document.getElementById('fruits')
    let fruit = prompt('please enter a fruit')
    const newHtml = `<li>${fruit}</li>`
    container.innerHTML += newHtml
}

function addCar() {
    const container = document.getElementById('cars')
    let car = document.getElementById('car').value
    const newHtml = `<li>${car}</li>`
    container.innerHTML += newHtml
}