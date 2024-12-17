"use strict";

(() => {

    const generate7BoomAfterDelayAsync  = (num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(!(num % 7 === 0) && !(num % 10 === 7)){
                    return reject(`Not a boom): ${num}`)
                } 
                resolve(`Boom(: ${num}`)
                }, 1000)
        })
    }
    
    document.getElementById('generate7BoomAfterDelayAsync').addEventListener('click', async () => {
        const min = document.getElementById('min').value
        const max = document.getElementById('max').value
        const randomNumber = Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
        const promise = await generate7BoomAfterDelayAsync(randomNumber)
        setTimeout(() => console.log(promise), 1000)
    })
      

})()

