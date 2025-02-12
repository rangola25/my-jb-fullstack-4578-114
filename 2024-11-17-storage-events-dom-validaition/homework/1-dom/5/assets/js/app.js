function mail() {
    const mail = document.getElementById('email');
    const email = mail.value
    const error = document.getElementById('span');
    if(!email) {
        error.innerHTML = 'You must enter an email'
        mail.style.background = "red"
    } else {
    alert(email)
}
}