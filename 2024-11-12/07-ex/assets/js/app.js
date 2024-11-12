// .1
let n = +prompt('enter a number')

function printN(n) {
   for (let i=0; i<n; i++) {
      document.write('*')
   }
}

printN(n)
document.write('<hr>')

// .2
let m = +prompt('enter a number')
function printSquare(m) {
   for (let i=0; i<m; i++) {
      printN(m)
      document.write('<br>')
   }

 }

 printSquare(m)

// function printStyledFullName() {
//     printStyledName(firstName)
//     document.write('&nbsp')
//     printStyledName(lastName)
// }

// const firstName = prompt('enter first name')
// const lastName = prompt('enter last name')

// // printStyledFirstName
// // printStyledLastName

