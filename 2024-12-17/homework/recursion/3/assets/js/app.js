"use strict";

(() => {

    document.getElementById('b1').addEventListener('click', () => {
        printDown(30)
    })

    const printDown = (n) => { 
        if (n <= 0) return
        if (n % 7 === 0 || n % 10 === 7) {   
        document.write(`${n}<br>`)   
        }
        printDown(n-1)         
    }


})()