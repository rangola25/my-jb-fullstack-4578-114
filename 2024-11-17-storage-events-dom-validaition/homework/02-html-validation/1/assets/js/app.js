function validate(event) {
    event.preventDefault()

    const firstNameInput = document.getElementById('firstName') 
    const lastNameInput = document.getElementById('lastName') 
    const emailInput = document.getElementById('email') 
    const phoneInput = document.getElementById('phone') 
    const messageInput = document.getElementById('message') 
    const telErrorMessage = document.getElementById('telErrorMessage')
    const firstNameErrorMessage = document.getElementById('firstNameErrorMessage')
    
    const firstName = firstNameInput.value
    const lastName = lastNameInput.value
    const email = emailInput.value
    const phone = phoneInput.value
    const message = messageInput.value

    if(!firstName) {
firstNameErrorMessage.innerHTML = 'please enter your name'
    }

    if (!firstName || !lastName || !email || !phone || !message) {
        console.log("fhggf")
        telErrorMessage.innerHTML = 'Please enter a tel number!'
    } else {
        alert(`${firstName}  ${lastName} ${email}  ${phone}  ${message}`)
    }
}