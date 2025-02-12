function printArray(row, col) {
    for (i=1; i<=col; i++) {
        for (z=1; z<=row; z++) {
            document.write(`*&nbsp&nbsp`);
        };
        document.write(`<br>`)
    };
};

printArray(4, 7);

let rand = (parseInt(Math.random() * (12-5+1)) + 5);
let rand2 = (parseInt(Math.random() * (17-12+1)) + 12);
printArray(rand, rand2);

let num1 = +prompt(`please enter a row number`);
let num2 = +prompt(`please enter a col number`);
printArray(num1, num2);