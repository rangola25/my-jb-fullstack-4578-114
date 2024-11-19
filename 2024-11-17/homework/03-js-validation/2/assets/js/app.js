function validate(event) {
    event.preventDefault()

    const firstNameInput = document.getElementById('firstName') 
    
    
    const firstName = firstNameInput.value
 

    if (firstName) {
        alert(firstName)
        firstNameInput.style.background = 'white'
    } else {
        alert(`Error`)
        firstNameInput.style.background = 'pink'
    }
        }