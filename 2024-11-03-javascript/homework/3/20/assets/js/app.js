let num = +prompt('please enter a number:');
let biggest = num;
let i = 1;
while (i <= 9) {
     if(biggest < num) {
        biggest = num;
     } else {}
     num = +prompt('please enter a number:');
    i++;};
document.write("The biggest number is: " + biggest);

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