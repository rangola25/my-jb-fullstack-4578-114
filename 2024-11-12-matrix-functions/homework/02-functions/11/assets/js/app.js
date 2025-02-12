function printArray(start,end) {
    rand = (parseInt(Math.random() * (end-start+1)) + start);
    document.write(rand)
};

printArray(4,16)
document.write(`<br>`)

let num = +prompt(`please enter an number`)
let num1 = +prompt(`please enter an number`)
printArray(num,num1)
document.write(`<br>`)

for (i=1; i<=100; i++) {
    printArray(-10,10)
    document.write(`&nbsp`)
};
