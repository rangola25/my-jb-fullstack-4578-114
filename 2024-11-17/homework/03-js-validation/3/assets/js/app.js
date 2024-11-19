function validate(event) {
    event.preventDefault()

    const firstNameInput = document.getElementById('firstName') 
    
    const firstName = firstNameInput.value

    const error = document.getElementById('error')

    if (firstName) {
        alert(firstName)
        firstNameInput.style.background = 'white'
        error.innerHTML = ''
    } else {
        alert(`Error`)
        firstNameInput.style.background = 'pink'
        error.innerHTML = 'You must enter your name!'
    }
        }