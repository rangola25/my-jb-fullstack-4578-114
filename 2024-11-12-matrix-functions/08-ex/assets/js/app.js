function printN(numbersArray) {
   let max = 0
   for (const number of numbersArray) {
      max = max > number ? max : number
   }
   console.log(`max of ${numbersArray} is ${max}`)
}

printN([10, 15, 23, 22])


// function printStyledFullName() {
//     printStyledName(firstName)
//     document.write('&nbsp')
//     printStyledName(lastName)
// }

// const firstName = prompt('enter first name')
// const lastName = prompt('enter last name')

// // printStyledFirstName
// // printStyledLastName

