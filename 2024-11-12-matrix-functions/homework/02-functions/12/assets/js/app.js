function printArray(num) {
    for (i=1; i<=num; i++) {
        for (z=1; z<=num; z++) {
            document.write(`*&nbsp&nbsp`);
        };
        document.write(`<br>`)
    };
};

printArray(4);

let num1 = +prompt(`please enter a number`);
printArray(num1);