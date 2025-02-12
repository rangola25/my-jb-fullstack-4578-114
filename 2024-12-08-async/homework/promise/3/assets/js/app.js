"use strict";

(() => {

    const generateCuteAnimalAfterDelayAsync  = () => {
        const animals = ["cat", "dog", "bunny", "bird", "scorpion", "spider", "Cockroach"]
        const randomAnimal = animals[Math.floor(Math.random() * (6 - 0 + 1)) + 0];
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(randomAnimal === "scorpion" || randomAnimal === "spider" || randomAnimal === "Cockroach"){
                    return reject(`Not a cute animal): ${randomAnimal}`)
                } 
            resolve(`A cute animal(: ${randomAnimal}`)
                }, 1000)
        })
    }
    
    document.getElementById('generateCuteAnimalAfterDelayAsync').addEventListener('click', async () => {
        const promise = await generateCuteAnimalAfterDelayAsync()
        setTimeout(() => console.log(promise), 1000)
    })
    
})()

