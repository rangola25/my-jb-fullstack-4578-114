function printPower2(num, powerFunc) {
    console.log(powerFunc(num))
}

printPower2(3, function power2(num) {return num ** 2})