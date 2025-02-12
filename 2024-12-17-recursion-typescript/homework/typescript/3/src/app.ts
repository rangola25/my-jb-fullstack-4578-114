const number1: number = parseInt(prompt("please enter a number"));
const number2: number = parseInt(prompt("please enter a number"));
primeNumber(number1, number2);

function primeNumber(number: number, num: number) {
  if (number > num) {
    for (let i: number = num; i < number; i++) {
      let isPrime = true;
      for (let j: number = 2; j < i; j++)
        if (i % j === 0) {
          isPrime = false;
          break;
        }
        if(isPrime === true) document.write(`${i}`);
    }
  } else {
    for (let i: number = number; i < num; i++) {
        let isPrime = true;
        for (let j: number = 2; j < i; j++)
          if (i % j === 0) {
            isPrime = false;
            break;
          }
          if(isPrime === true) document.write(`${i}`);
      }
  }
}
