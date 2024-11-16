function printMax(num1, num2, num3) {
    max = num1;
    if (max > num2 && max > num3) {
        document.write(num1)
    } else if (num2 > num3) {
        document.write(num2)
    } else {
    document.write(num3)
    }
}

printMax(900,20,46); 
document.write(`<br>`)

let num4 = +prompt(`please enter a number`)
let num5 = +prompt(`please enter a number`)
let num6 = +prompt(`please enter a number`)

printMax(num4, num5, num6)
document.write(`<br>`)

const randomNumber = parseInt(Math.random() * 100)
const randomNumber1 = parseInt(Math.random() * 100)
const randomNumber2 = parseInt(Math.random() * 100)

printMax(randomNumber, randomNumber1, randomNumber2)

