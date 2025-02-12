let num = +prompt('please enter a number:');
let pair = 0;
let odd = 0;
let i = 1;
while (i <= 10) {
     if(num % 2 === 0) {
      pair++;
     } else if (num % 2 === 1){
      odd++;
     } else {}
     num = +prompt('please enter a number:');
    i++;};
document.write("The amount of pair numbers: " + pair + "<br>" + "The amount of odd numbers: " + odd);

// let avg = 0;
// let i = 0;

// const someVar = +prompt('please enter a number:')
// if(isNaN(someVar)) {
//   alert('this is not a number')
// }

// while (num !== 0) {
//   alert(num % 7 === 0 ? 'divides' : 'does not divide')
//   num = +prompt('please enter a number');
// } 

// if(i > 0) {
//   alert(`average is ${avg/(i-1)}`);
// } else {
//   alert(``);
// }