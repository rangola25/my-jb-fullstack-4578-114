//  let grade = +prompt('please enter a grade');
// if (grade === 100) alert(`A+`)
// else if (grade < 100 && grade > 89) alert(`A`)
// else if (grade < 90 && grade > 79) alert(`B`)
// else if (grade < 80 && grade > 69) alert(`C`)
// else if (grade < 70 && grade > 59) alert(`D`)
// else if (grade < 60 && grade >= 0) alert(`F`)
// else alert(`This is not a grade`)
const grade = +prompt('please enter a grade');
switch(true) {
    case grade >= 0 && grade <=59:
        document.write('fail');
        break;
    case  grade >= 0 && grade <=69:
        document.write('D');
        break;
    case  grade >= 0 && grade <=79:
        document.write('C');
        break;
    case  grade >= 0 && grade <=89:
        document.write('B');
        break;
    case  grade >= 0 && grade <=99:
        document.write('A');
        break;
    case grade === 100:
        document.write('A+');
        break;
        default:
            alert('bad input')
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