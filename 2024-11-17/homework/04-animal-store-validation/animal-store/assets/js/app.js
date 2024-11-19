function validate(event) {
    event.preventDefault()
    
    const firstNameInput = document.getElementById('name')
    const lastNameInput = document.getElementById('lastName')
    const messageInput = document.getElementById('message')

    const firstName = firstNameInput.value
    const lastName = lastNameInput.value
    const message = messageInput.value

    if(!firstName) {
        alert(`חסר שם פרטי`)
        firstNameInput.style.background = 'pink'
    } else

    if(!lastName) {
        alert(`חסר שם משפחה`)
        lastNameInput.style.background = 'pink'
        firstNameInput.style.background = 'white'
    } else

    if(!message) {
        alert(`חסר הודעה`)
        messageInput.style.background = 'pink'
        lastNameInput.style.background = 'white'
    } else {
        window.location.href = 'save.html';

    }
}