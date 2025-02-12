let count = 0;

function printArray(row, col) {
    for (i=1; i<=col; i++) {
        for (z=1; z<=row; z++) {
            document.write(`*&nbsp&nbsp`);
        };
        document.write(`<br>`)
    };
    count++;
};

printArray(4, 7);

let rand = (parseInt(Math.random() * (3-2+1)) + 2);
let rand2 = (parseInt(Math.random() * (5-4+1)) + 4);
printArray(rand, rand2);

let num1 = +prompt(`please enter a row number`);
let num2 = +prompt(`please enter a col number`);
printArray(num1, num2);

function printCount() {
    document.write(count)
}

function printRandom(num) {
    for(v=1; v<=num; v++) {
        printArray(rand, rand2);
    }
}
let num3 = +prompt(`please enter amount of new rectangle`);
printRandom(num3)

document.write(`<br>`)
printCount()