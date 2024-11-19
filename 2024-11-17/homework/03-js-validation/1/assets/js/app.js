function validate(event) {
    event.preventDefault()

    const firstNameInput = document.getElementById('firstName') 
    
    
    const firstName = firstNameInput.value
 

    if (firstName) {
        alert(firstName)
    } else {
        alert(`Error`)
    }
        }