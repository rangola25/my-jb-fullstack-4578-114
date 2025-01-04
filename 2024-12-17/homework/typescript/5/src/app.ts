const number: number = parseInt(prompt("please enter a number"));
primeNumber(number);

function primeNumber(number: number) {
    for(let i=1; i<=number; i++) {
        for(let space=i; space<number; space++) {
            document.write(`&nbsp&nbsp`);
        }

        for(let stars=1; stars<=i; stars++) {
            document.write(`${stars}`)
        }

        for(let stars=i-2; stars>=0; stars--) {
            document.write(`${stars+1}`)
        }

        document.write(`<br>`); 
    }

    for(let i=1; i<number; i++) {
        for(let space=i-1; space>=0; space--) {
            document.write(`&nbsp&nbsp`);
        }

        for (let stars=1; stars<=number-i; stars++) {
            document.write(`${stars}`);
        }

        for (let stars = number - i - 1; stars >= 1; stars--) {
            document.write(`${stars}`);
        }

        document.write(`<br>`); 
    }
}
