"use strict";

(() => {

    const generateWorkingDayAfterDelayAsync = () => {
        const animals = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
        const randomDay = animals[Math.floor(Math.random() * (6 - 0 + 1)) + 0];
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(randomDay === "friday" || randomDay === "saturday"){
                    return reject(`Not a work day): ${randomDay}`)
                } 
            resolve(`A work day(: ${randomDay}`)
                }, 1000)
        })
    }
    
    document.getElementById('generateWorkingDayAfterDelayAsync').addEventListener('click', async () => {
        const promise = await generateWorkingDayAfterDelayAsync()
        setTimeout(() => console.log(promise), 1000)
    })
    
})()

