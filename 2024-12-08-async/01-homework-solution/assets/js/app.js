"use strict";

(() => {
    const getAverage = numbers => {

    if(typeof numbers === 'undefined') throw new Error('numbers must not be undefined')
    if(typeof numbers === 'null') throw new Error('numbers must not be null')
    if(!Array.isArray(numbers)) throw new Error('numbers must not be an array')
    if(numbers.length === 0) throw new Error('numbers must not be an empty array')

    const sum = numbers.reduce((acc, current) => acc + current, 0);
    return sum / numbers.length;
    }

    const btn = document.getElementById('invoke')
    btn.addEventListener('click', () => {
        try {
            const average = getAverage(['dsfsdf'])
            console.log(`average is ${average}`)
        } catch (e) {
            console.log(e.message)
        }

    })

    // const numbers = [10, 20, 30];
    // const average = getAverage(numbers);
    // console.log(average);
})()

