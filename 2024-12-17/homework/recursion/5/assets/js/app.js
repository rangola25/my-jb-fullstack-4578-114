"use strict";

(() => {

    document.getElementById('b1').addEventListener('click', () => {
        const factorial = printDown(10)
        console.log(factorial)
    })

    const printDown = (n) => { 
        if (n <= 1) return 1
        return n * printDown(n-1)
    }


})()