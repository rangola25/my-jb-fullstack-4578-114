const doCalc = (a,b,type) => {
    switch(type) {
        case '+':
            return (a,b) => a + b
        case '*':
            return (a,b) => a * b
    }
}

const calcFunction = doCalc(2,4,'+')
console.log(typeof calcFunction)
console.log(calcFunction)

console.log(typeof calcFunction(2,4))
console.log(calcFunction(2,4))