"use strict";

(() => {

    document.getElementById('b1').addEventListener('click', () => {
        printDown(10)
    })

    const printDown = (n) => { 
        if (n <= 0) return    
        document.write(`${n}`)   
        printDown(n-1)         
    }


})()