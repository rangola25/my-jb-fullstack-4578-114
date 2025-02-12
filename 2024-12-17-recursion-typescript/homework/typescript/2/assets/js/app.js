const number = parseInt(prompt('please enter a number'));
primeNumber(number);
function primeNumber(number) {
    if (number < 2) {
        console.log(false);
        return;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return console.log(false);
        }
    }
    return console.log(true);
}
