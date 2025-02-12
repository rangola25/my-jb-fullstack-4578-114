function printPower2(num, powerFunc) {
    if(typeof powerFunc !== 'function') return
    console.log(powerFunc(num))
}

printPower2(3, function (num) {return num ** 2})