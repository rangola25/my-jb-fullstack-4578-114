// exr 1
function sayHello() {
    console.log('hello')
}

function doSomething(callback) {
    callback()
}

doSomething(sayHello)

doSomething(function sayHello() {
    console.log('hello')
})

doSomething(function () {console.log('hello')})

doSomething(() => console.log('hello'))

// exr 2
function sum (a,b,c) { 
    console.log(a + b + c)
}

function doSum(callback) {
    callback(10,20,30)
}

doSum(function sum (a,b,c) {console.log(a + b + c)})

doSum(function (a,b,c) {console.log(a + b + c)})

doSum((a,b,c) => {console.log(a + b + c)})

// exr 3
function getPower2 (num) {
    return num ** 2
}

function printPower2(callback) {
    console.log(callback(20))
}

printPower2(getPower2)

printPower2(function getPower2 (num) {return num ** 2})

printPower2(function (num) {return num ** 2})

printPower2(num => num ** 2)

function divide(a, b) {
    const result = a / b 
    return result
}

function printIsEven(num) {
    if(num%2 === 0) {
        console.log(`odd`)
    } else {
        console.log(`even`)
    }
}

const divide = (a, b) => a / b

const printIsEven = num => console.log(num%2===0 ? 'even' : 'odd')

function isNegative(num) {
    if(num<0) {
        console.log(`negative!`)
        return true
    }
    return false
}

const isNegative = num => {
    if(num<0) {
        console.log(`negative!`)
        return true
    }
    return false
}