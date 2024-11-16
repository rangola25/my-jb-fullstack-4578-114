function printAverage(num1, num2, num3) {
    average = (num1 + num2 + num3)/3;
    document.write(average)
}

printAverage(9,20,46); 
document.write(`<br>`)

let num4 = +prompt(`please enter a number`)
let num5 = +prompt(`please enter a number`)
let num6 = +prompt(`please enter a number`)

printAverage(num4, num5, num6)
document.write(`<br>`)

const randomNumber = parseInt(Math.random() * 100)
const randomNumber1 = parseInt(Math.random() * 100)
const randomNumber2 = parseInt(Math.random() * 100)

printAverage(randomNumber, randomNumber1, randomNumber2)

