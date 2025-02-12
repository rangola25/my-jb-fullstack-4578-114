let grade = +prompt('please enter a grade');
if (grade < 0 || grade > 100) {
    alert(`invalid`)
} else if (grade >= 60) {
    alert(`pass`)
} else {
    alert(`fail`)
}


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