function printSmile(num) {
    if (num === 1) {document.write(`(-:`)}
    if (num === 2) {document.write(`)-:`)}
    if (num === 3) {document.write(`/-:`)}
    if (num === 4) {document.write(`(-;`)}
    if (num === 5) {document.write(`)-;`)}
};

printSmile(1)
document.write(`<br>`)

let num2 = +prompt(`please enter a number`)
printSmile(num2)
document.write(`<br>`)

printSmile(parseInt(Math.random() * (6-1)) + 1)
document.write(`<br>`)

function printAll() {
    for (let i=1; i<=5; i++) {
        printSmile(i)
        document.write(`&nbsp&nbsp&nbsp`)
    };
};
printAll()
document.write(`<br>`)

function printAll100() {
    for (let i=1; i<=100; i++) {
        printSmile(parseInt(Math.random() * (6-1)) + 1)
        document.write(`&nbsp&nbsp&nbsp`)
    };
};
printAll100()

// printAverage(9,20,46); 
// document.write(`<br>`)

// let num4 = +prompt(`please enter a number`)
// let num5 = +prompt(`please enter a number`)
// let num6 = +prompt(`please enter a number`)

// printAverage(num4, num5, num6)
// document.write(`<br>`)

// const randomNumber = parseInt(Math.random() * 100)
// const randomNumber1 = parseInt(Math.random() * 100)
// const randomNumber2 = parseInt(Math.random() * 100)

// printAverage(randomNumber, randomNumber1, randomNumber2)