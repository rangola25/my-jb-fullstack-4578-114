let num1 = +prompt('please enter a number');
let num2 = +prompt('please enter another number');
let num3 = +prompt('please enter another number');
if (num1 > num2 && num1 > num3) alert(`the biggest number is ${num1}`);
else if (num2 > num3) alert(`the biggest number is ${num2}`);
else if (num3 > num2) alert(`the biggest number is ${num3}`);
else alert(`funny! but i can't read any number here`);



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