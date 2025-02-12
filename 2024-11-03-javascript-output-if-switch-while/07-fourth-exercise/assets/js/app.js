const num = +prompt(`please enter a num between 1-5:`);
// let second = prompt(`please enter second num:`);
// document.write(`your age is ${age}`);



// if(num <= 0 || num >= 6) {
//     document.write('invalid input');
// }
// else if(num === 1) {
// document.write('one');
// }
// else if(num === 2) {
// document.write('two');
// }
// else if(num === 3) {
// document.write('three');
// }
// else if(num === 4) {
// document.write('four');
// }
// else {
// document.write('five');
// }
    


switch(num) {
    case 1: document.write('one'); break;
    case 2: document.write('two'); break;
    case 3: document.write('three'); break;
    case 4: document.write('four'); break;
    case 5: document.write('five'); break;
    default: document.write('invalid input')
}

