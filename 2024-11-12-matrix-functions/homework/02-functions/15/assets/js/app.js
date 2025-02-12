let count = 0;

function printArray(row, col) {
    for (i=1; i<=col; i++) {
        if (i===1 || i===col) {
            for (t=1; t<=row; t++) {
                document.write(`*&nbsp&nbsp`);
            }
        } else {
        for (z=1; z<=row; z++) {
            if (z===1 || z===row) {
                document.write(`*&nbsp&nbsp`);
            } else {
                document.write(`&nbsp&nbsp&nbsp&nbsp`);
                }
            }
        }
        document.write(`<br>`)
    };
    count++;
};

printArray(6, 4);

let rand = (parseInt(Math.random() * (3-2+1)) + 2);
let rand2 = (parseInt(Math.random() * (5-4+1)) + 4);
printArray(rand, rand2);

let num1 = +prompt(`please enter a row number`);
let num2 = +prompt(`please enter a col number`);
printArray(num1, num2);

// function printCount() {
//     document.write(count)
// }

// function printRandom(num) {
//     for(v=1; v<=num; v++) {
//         printArray(rand, rand2);
//     }
// }
// let num3 = +prompt(`please enter amount of new rectangle`);
// printRandom(num3)

// document.write(`<br>`)
// printCount()