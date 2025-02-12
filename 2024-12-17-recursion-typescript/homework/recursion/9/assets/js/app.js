"use strict";

(() => {

    document.getElementById('b1').addEventListener('click', () => {
        const hello = printDown("hello")
        console.log(hello)
        const radar = printDown("radar")
        console.log(radar)
        const num = printDown("1221")
        console.log(num)
    })

    const printDown = (n) => {
        const letters = n.split('');
        if(letters.length < 2) {
            return true
        }
        console.log(letters)
        const check1 = letters.splice(0, 1).join('')
        const check2 = letters.splice(letters.length - 1, 1).join('')
        console.log(letters)
        if (check1 !== check2) {
            return false;
        } 
        return printDown(letters.join(''));
    }


})()