// document.cookie = "theme=dark"
// console.log(document.cookie)

const expirationDate = new Date()

expirationDate.setFullYear(expirationDate.getFullYear()+1)
document.cookie = `theme=dark; expires=${expirationDate}`
console.log(document.cookie)

sessionStorage.setItem('font', 'david')
console.log(sessionStorage.getItem('font'))

localStorage.setItem('font-size', '36')
console.log(localStorage.getItem('font-size'))