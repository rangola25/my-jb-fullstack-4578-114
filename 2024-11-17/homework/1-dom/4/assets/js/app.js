function names() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    if(firstName.checkValidity() && lastName.checkValidity()) {
        alert(`${firstName.value} ${lastName.value}`)
    } else {
        alert(`Error`)
    }
}