
function changeInputBackgroundColor(event) {
    const key = event.key; 
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    const inputField = document.getElementById('inputField');
    inputField.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('inputField');
    if (inputField) {
        inputField.addEventListener('keydown', changeInputBackgroundColor);
    } else {
        console.error('Input field not found!');
    }
});
