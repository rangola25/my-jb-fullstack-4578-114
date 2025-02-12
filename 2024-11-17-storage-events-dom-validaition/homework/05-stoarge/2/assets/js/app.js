function save() {
    const cityInput = document.getElementById('city')
    const streetInput = document.getElementById('street')
    const numberInput = document.getElementById('number')
    const idInput = document.getElementById('id')

    const city = cityInput.value
    const street = streetInput.value
    const number = numberInput.value
    const id = idInput.value

    if(!city) {
        alert(`Error - Missing city input`)
        cityInput.style.background = 'red'
    }

    if(!street) {
        alert(`Error - Missing street input`)
        streetInput.style.background = 'red'
    }

    if(!number) {
        alert(`Error - Missing number input`)
        numberInput.style.background = 'red'
    }

    if(!id) {
        alert(`Error - Missing id input`)
        idInput.style.background = 'red'
    }

    const form = {city: city, street: street, number: number, id: id}

    localStorage.setItem('address', JSON.stringify(form))
}

function load() {
    const info = JSON.parse(localStorage.getItem('address'))
    // console.log(info)
    document.getElementById('city').value = info.city
    document.getElementById('street').value = info.street
    document.getElementById('number').value = info.number
    document.getElementById('id').value = info.id

}