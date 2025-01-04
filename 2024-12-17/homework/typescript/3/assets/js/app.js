const number1 = parseInt(prompt("please enter a number"));
const number2 = parseInt(prompt("please enter a number"));
primeNumber(number1, number2);

function primeNumber(number, num) {
    if (number > num) {
        for (let i = num; i < number; i++) {
            let isPrime = true;
            for (let j = 2; j < i; j++)
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            if (isPrime === true)
                document.write(`${i}`);
        }
    }
    else {
        for (let i = number; i < num; i++) {
            let isPrime = true;
            for (let j = 2; j < i; j++)
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            if (isPrime === true)
                document.write(`${i}`);
        }
    }
}
