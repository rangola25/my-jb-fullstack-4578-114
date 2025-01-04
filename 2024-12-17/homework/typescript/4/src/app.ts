const number: number = parseInt(prompt("please enter a number"));
primeNumber(number);

function primeNumber(number: number) {
    for(let i=0; i<number; i++) {
        for(let space=i; space<number-1; space++) {
            document.write(`&nbsp&nbsp`);
        }

        for(let stars=i; stars>=0; stars--) {
            document.write(`*`)
        }

        for(let stars=i-1; stars>=0; stars--) {
            document.write(`*`)
        }

        document.write(`<br>`); 
    }

    for(let i=0; i<number-1; i++) {
        for(let space=i; space>=0; space--) {
            document.write(`&nbsp&nbsp`);
        }

        for(let stars=i; stars<number-1; stars++) {
            document.write(`*`)
        }

        for(let stars=i+1; stars<number-1; stars++) {
            document.write(`*`)
        }

        document.write(`<br>`); 
    }
}
