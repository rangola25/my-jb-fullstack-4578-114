let num = +prompt('please enter a number:');
let help = 0;
let singularity = num;
while (singularity >= 1 || singularity <= -1) {
     singularity = singularity / 10;
     singularity = parseInt(singularity);
     help++;
};
document.write("The number " + num + " have " + help + " digits");

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