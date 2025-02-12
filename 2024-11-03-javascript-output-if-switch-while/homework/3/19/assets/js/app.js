let num = 0;
let sum = 0;
let i = 1;
while (i <= 10) {
     num = +prompt('please enter a number:');
     sum = sum + num;
    i++;};
document.write("The amount: " + sum + "<br>" + "The average: " + (sum/10));

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