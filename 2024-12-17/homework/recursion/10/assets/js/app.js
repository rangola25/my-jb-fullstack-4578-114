"use strict";

(() => {

    document.getElementById('b1').addEventListener('click', () => {
        const even = printDown([2, 4, 6, 8, 10])
        console.log(even)
        const odd = printDown([2, 3, 5, 7, 9])
        console.log(odd)
    })

    const printDown = (numbers) => {
        const letters = numbers
        if (letters.length === 0) return true
        const number = numbers.splice(0,1)
        if (number % 2 !== 0) {
            return false
        }
        return printDown(letters)
    }


})()