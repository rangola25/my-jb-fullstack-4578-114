let first = prompt(`please enter first num:`);
let second = prompt(`please enter second num:`);
// document.write(`your age is ${age}`);

// first = parseInt(first);
// second = parseInt(second);

// first = parseFloat(first);
// second = parseFloat(second);

first = +first;
second = +second;

if(first >= second) {
   document.write(`the biggest is ${first}`);
}
else {
    document.write(`the biggest is ${second}`);
}

// arithmetic equation 
// 21 > 9 => true

// arithmetic equation 
// "21" > "9" => false