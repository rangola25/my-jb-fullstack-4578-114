"use strict";

(() => {

    document.getElementById('b1').addEventListener('click', () => {
        const sumNumbers = printDown(7946)
        console.log(sumNumbers)
    })

    const printDown = (number) => {
        if (number === 0) return 0
        const newNumber = number % 10
        const digitalNumber = parseInt(number / 10)  
        if (typeof number !== "number") {
            return false
        }
        return newNumber + printDown(digitalNumber)
    }

})()