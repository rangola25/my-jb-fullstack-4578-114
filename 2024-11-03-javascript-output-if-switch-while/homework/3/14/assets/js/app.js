let first = +prompt('please enter your first:');
let last = +prompt('please enter your last:');
let num = +prompt('please enter your num:');
let i = first;
if(last > first) {
while (i <= last) {
    if(i % num === 0) {
document.write(i + " ");
    } else {}
i ++;
};
} else {
    i = last;
    while (i <= first) {
        if(i % num === 0) {
    document.write(i + " ");
        } else {}
    i ++;
    };
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