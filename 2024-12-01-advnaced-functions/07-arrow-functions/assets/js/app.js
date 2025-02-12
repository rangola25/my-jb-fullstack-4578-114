function printPower2(num, powerFunc) {
    if(typeof powerFunc !== 'function') return
    console.log(powerFunc(num))
}

printPower2(3, function (num) {return num ** 2})
printPower2(3, (num) => {return num ** 2})

// arrow functions styles
const sum = (a, b) => {
    const result = a + b
    console.log(result)
    return result
}

const power4 = num => {
    const result = num ** 4
    console.log(result)
    return result
}

power4(5)

const powerX = (num, X) => console.log(num ** X)

const powerPowerTwo = num => console.log(num ** 2)

const getPower2 = num => num ** 2

console.log(getPower2(5))
