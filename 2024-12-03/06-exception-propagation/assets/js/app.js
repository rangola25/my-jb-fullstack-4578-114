const fixNum = (num, numberOfDigits) => num.toFixed(numberOfDigits)

const work = () => {
    const numberOfDigits = +prompt('enter number of digits')

    console.log('hello1')
    const pi = fixNum(Math.PI, numberOfDigits)
    console.log('hello2')
    console.log(pi)
}

try{
    work()
} catch(e) {
    console.log(e.message)
}



