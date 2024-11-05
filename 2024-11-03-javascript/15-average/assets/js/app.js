let avg = 0;
let i = 0;
let num;

const someVar = +prompt('please enter not a number:')
if(isNaN(someVar)) {
  alert ('this is not a number')
}

while(num !== 0) {
  num = +prompt('please enter a num');
  avg += num;
  i ++;
} 

if(i > 0) {
  alert(`average is ${avg/(i-1)}`);
} else {
  alert(``);
}