"use strict";

(() => {

    document.getElementById('b1').addEventListener('click', () => {
        const biggest = printDown([9, 18, 7, 4, 5, 10])
        console.log(biggest)
    })

    const printDown = (n, biggest = 0) => {
        let removedItem = n.pop();
        biggest = biggest > removedItem ? biggest : removedItem
        if (n.length === 0) return biggest
        return printDown(n , biggest)
    }


})()