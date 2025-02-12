"use strict";

(() => {

    document.getElementById('b1').addEventListener('click', () => {
        const result = printDown(30)
        console.log(result)
    })

    const printDown = (n) => { 
        let sum = 0
        if (n <= 0) return 1
        if(n % 2 === 0) {
            sum = sum + n
        } 
        printDown(n-1) 
        return sum 
    }


})()