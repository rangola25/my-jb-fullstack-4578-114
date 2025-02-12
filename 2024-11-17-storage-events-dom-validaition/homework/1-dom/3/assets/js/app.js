function mail() {
    const emailInput = document.getElementById('email');
    if (emailInput.checkValidity()) {
        alert("Valid email: " + emailInput.value);
    } else {
        alert("Invalid email format.");
    }
}