let num = +prompt('please enter a number');
if (num > 1000) alert(`The number bigger than 1000`)
else if (num <= 1000 && num >= 101) alert(`The number between 101 and 1000 inclusive`)
else if (num <= 100 && num >= 1) alert(`The number between 1 and 100 inclusive`)
else if (num === 0) alert(`The number is zero`)
else if (num < 0) alert(`The number is negative`)
else alert(`that is not a number`)



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