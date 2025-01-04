"use strict";

(() => {

    document.getElementById('b1').addEventListener('click', () => {
        const calc = printDown(10)
        document.write(calc)
    })

    let sum = 0
    const printDown = (n) => { 
        if (n <= 0) return 
        sum = sum + n     
        printDown(n-1)
        return sum         
    }


})()