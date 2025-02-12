"use strict";

(() => {

    const generatePrimeNumberAfterDelayAsync = (num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                for(let i=2; i<num; i++) {
                if(num % i === 0){
                    return reject(`Not a prime number): ${num}`)
                } 
            }
            resolve(`Prime number(: ${num}`)
                }, 1000)
        })
    }
    
    document.getElementById('generatePrimeNumberAfterDelayAsync').addEventListener('click', async () => {
        const min = document.getElementById('min').value
        const max = document.getElementById('max').value
        const randomNumber = Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
        const promise = await generatePrimeNumberAfterDelayAsync(randomNumber)
        setTimeout(() => console.log(promise), 1000)
    })
    
})()

