let num = +prompt('please enter a number:');
let help = 0;
let singularity = 0;
while (num >= 1 || num <= -1) {
     singularity = num % 10;
     num = num / 10;
     help = help + singularity;
     num = num - (singularity/10)
};
document.write("The sum of the digits: " + help);

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