"use strict";

(() => {

    document.getElementById('b1').addEventListener('click', () => {
        printDown(30)
    })

    const printDown = (n) => { 
        if (n <= 0) return
        printDown(n-1)  
        document.write(`${n}<br>`)   
    }


})()