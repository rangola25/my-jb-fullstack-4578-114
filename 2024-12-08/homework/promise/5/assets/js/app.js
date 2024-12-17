"use strict";

(() => {

    const generateWorkingDayAfterDelayAsync = (size) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const numberN = Math.floor(Math.random() * (50 - 1 + 1) + 1)
                if(numberN % 2 === 0){
                    const arraySize = []
                    for(let i=0; i<size; i++) {
                    arraySize.push(Math.floor(Math.random() * (25 - 1 + 1) + 1))
                    }
                    return resolve(`${arraySize}`)
                } 
            reject(`An odd number): ${numberN}`)
                }, 1000)
        })
    }
    
    document.getElementById('generateWorkingDayAfterDelayAsync').addEventListener('click', async () => {
        const size = Math.floor(Math.random() * (100 - 1 + 1) + 1)
        const promise = await generateWorkingDayAfterDelayAsync(size)
        setTimeout(() => console.log(promise), 1000)
    })
    
})()

