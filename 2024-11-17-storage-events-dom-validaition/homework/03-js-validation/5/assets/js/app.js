function validate(event) {
    event.preventDefault()

    const firstNameInput = document.getElementById('firstName') 
    const lastNameInput = document.getElementById('lastName') 
    const emailInput = document.getElementById('email') 
    
    const firstName = firstNameInput.value
    const lastName = lastNameInput.value
    const email = emailInput.value

    const error = document.getElementById('error')
    const error2 = document.getElementById('error2')
    const error3 = document.getElementById('error3')

    if (firstName && lastName && email) {
        alert(`${firstName} ${lastName} ${email}`)
        firstNameInput.style.background = 'white'
        lastNameInput.style.background = 'white'
        emailInput.style.background = 'white'
        error.innerHTML = ''
        error2.innerHTML = ''
        error3 = ''
    }
    
    if(!firstName) {
        alert(`Error`)
        firstNameInput.style.background = 'pink'
        error.innerHTML = 'You must enter your first name!'
    }

    if(!lastName) {
        alert(`Error`)
        lastNameInput.style.background = 'pink'
        error2.innerHTML = 'You must enter your last name!'
    }

    if(!email) {
        alert(`Error`)
        emailInput.style.background = 'pink'
        error3.innerHTML = 'You must enter your email!'
    }

    if(firstName) {
        firstNameInput.style.background = 'white'
        error.innerHTML = ''
    }

    if(lastName) {
        lastNameInput.style.background = 'white'
        error2.innerHTML = ''
    }

    if(email) {
        emailInput.style.background = 'white'
        error3.innerHTML = ''
    }

}