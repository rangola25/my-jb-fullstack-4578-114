function printMax(a, b) {
   console.log(a > b ? a : b)
}

function getRandom(min, max) {
   return parseInt(Math.random() * (max-min)) + min
}

printMax(4, 9)
printMax(getRandom(0, 100), getRandom(0, 100))

const num1 = +prompt('enter a number')
const num2 = +prompt('enter a number')

printMax(num1, num2)

// function printStyledFullName() {
//     printStyledName(firstName)
//     document.write('&nbsp')
//     printStyledName(lastName)
// }

// const firstName = prompt('enter first name')
// const lastName = prompt('enter last name')

// // printStyledFirstName
// // printStyledLastName

