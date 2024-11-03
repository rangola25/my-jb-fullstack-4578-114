const grade = +prompt(`please enter a grade:`);
// let second = prompt(`please enter second num:`);
// document.write(`your age is ${age}`);

// first = parseInt(first);
// second = parseInt(second);

// first = parseFloat(first);
// second = parseFloat(second);

// grade = +grade;
// second = +second;

if(60 <= grade && grade < 100) {
document.write('pass');
}
else if(grade === 100) {
document.write('perfect');
}
else if(0 <= grade && grade <= 60) {
document.write('Fail');
}
else {
document.write('invalid');
}
    


// arithmetic equation 
// 21 > 9 => true

// arithmetic equation 
// "21" > "9" => false