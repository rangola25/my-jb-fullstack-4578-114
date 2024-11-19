function save() {
    const city = document.getElementById('city').value
    const street = document.getElementById('street').value
    const number = document.getElementById('number').value
    const id = document.getElementById('id').value

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