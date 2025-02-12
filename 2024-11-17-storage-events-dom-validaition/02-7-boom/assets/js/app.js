function getInputFromUser() {
   return +prompt(`please enter a number`);
}

function StillWantsToContinue(input) {
  return input!==0;
}

function numContains7(num) {
   return num.toString().includes(7)
}

function numDividesWith7(num) {
  return num % 7 === 0;
}

function boom() {
   console.log(`boom`) 
}

function notBoom(num) {
   console.log(num) 
}

let input = getInputFromUser()

while(StillWantsToContinue(input)) {
   for(let i = 1; i <= input; i++)
if(numContains7(i) || numDividesWith7(i)){
   boom(i)
} else {
   notBoom(i)
}
input = getInputFromUser()
}