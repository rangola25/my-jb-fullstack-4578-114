function sayGoodbye() {
    // console.log(document.body.firstChild.nextSibling)
    document.getElementById("myParagraph").innerText="goodbye"
}

function saveName() {
const name = document.getElementById("nameInput").value
localStorage.setItem('username', name)
}

function restoreName() {
    const username = localStorage.getItem('username')
    const inputElement = document.getElementById('nameInput')
    inputElement.value = username
    inputElement.style.width = '300px'
    inputElement.style.backgroundColor = 'green'
}