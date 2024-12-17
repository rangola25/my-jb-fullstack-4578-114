"use strict";

(() => {

    const generate7BoomAfterDelayAsync  = (num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(!(num % 7 === 0) && !(num % 10 === 7)){
                    return reject(`Not a boom): ${num}`)
                } 
                resolve(`${num}`)
                }, 1000)
        })
    }
    
    document.getElementById('generate7BoomAfterDelayAsync').addEventListener('click', () => {
        const min = document.getElementById('min').value
        const max = document.getElementById('max').value
        const randomNumber = Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
        generate7BoomAfterDelayAsync(randomNumber)
        .then(num => {
            console.log(`Boom: ${num}`)
        })
        .catch(error => {
            console.log(error)
        })
    })
    
})()

