function option() {
    const colorSelector = document.getElementById('colorSelector').value
    const bodyBackground = document.getElementById('body')

    if (colorSelector === 'blue') {
        bodyBackground.style.background = 'blue';
    } 
    if (colorSelector === 'pink') {
        bodyBackground.style.background = 'pink';
    } 
    if (colorSelector === 'yellow') {
        bodyBackground.style.background = 'yellow';
    } 
    if (colorSelector === 'green') {
        bodyBackground.style.background = 'green';
    } 

    localStorage.setItem('colorBackground', colorSelector);
}

window.onload = function() {
    const savedColor = localStorage.getItem('colorBackground');

    if (savedColor) {
        document.getElementById('body').style.background = savedColor;
        document.getElementById('colorSelector').value = savedColor;
    }
}

