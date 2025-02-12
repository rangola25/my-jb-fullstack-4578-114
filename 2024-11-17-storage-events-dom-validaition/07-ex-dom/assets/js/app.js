function changeTheme() {
const color = document.getElementById("colorInput").value
const text = document.getElementById("textInput").value

const myParagraph = document.getElementById('myParagraph')
myParagraph.style.background = color
myParagraph.innerText = text
}
