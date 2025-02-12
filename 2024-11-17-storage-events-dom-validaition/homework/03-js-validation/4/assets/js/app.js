function validate(event) {
    event.preventDefault()

    const firstNameInput = document.getElementById('firstName') 
    const lastNameInput = document.getElementById('lastName') 
    
    const firstName = firstNameInput.value
    const lastName = lastNameInput.value

    const error = document.getElementById('error')
    const error2 = document.getElementById('error2')

    if (firstName && lastName) {
        alert(`${firstName} ${lastName}`)
        firstNameInput.style.background = 'white'
        lastNameInput.style.background = 'white'
        error.innerHTML = ''
        error2.innerHTML = ''
    }
    
    if (!firstName && !lastName) {
        alert(`Error`)
        firstNameInput.style.background = 'pink'
        error.innerHTML = 'You must enter your first name!'
        lastNameInput.style.background = 'pink'
        error2.innerHTML = 'You must enter your last name!'
    } else if(!firstName) {
        firstNameInput.style.background = 'pink'
        error.innerHTML = 'You must enter your first name!'
        lastNameInput.style.background = 'white'
        error2.innerHTML = ''
    } else if(!lastName){
        lastNameInput.style.background = 'pink'
        error2.innerHTML = 'You must enter your last name!'
        firstNameInput.style.background = 'white'
        error.innerHTML = ''
    }


}