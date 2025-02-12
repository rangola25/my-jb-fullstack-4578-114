function displayInputPower(input, power) {
   console.log(input ** power)
}

function inputIs(input, is) {
   return input % is === 0
}

function getInputFromUser() {
   return +prompt(`enter a number`)
}

function userStillWantsToContinue(input) {
   return input !== 0
}

let input = getInputFromUser()

while(userStillWantsToContinue(input)) {
   if(inputIs(input, 2)) {
      displayInputPower(input, 2)
   } 
   if(inputIs(input, 3)) {
      displayInputPower(input, 3)
   }
   input = getInputFromUser()
}

