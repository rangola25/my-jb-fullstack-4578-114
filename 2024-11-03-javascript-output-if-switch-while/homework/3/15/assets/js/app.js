let num = +prompt('please enter a number:');
while (num > 0 || num < 0) {
    if(num % 7 === 0) {
        alert(`The number is divisible by 7`);
    } else {
        alert(`The number is not divisible by 7`);
    };
    num = +prompt('please enter a number:');
};
alert(`The number is not divisible by 7`);

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