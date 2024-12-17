"use strict";

(() => {

    const getPizzaFromServerAsync = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const numberN = Math.floor(Math.random() * (50 - 1 + 1) + 1)
                if(numberN % 2 === 0){
                        const pizza = {
                            diameter: Math.floor(Math.random() * (50 - 10 + 1) + 10),
                            price: Math.floor(Math.random() * (80 - 20 + 1) + 20),
                            extras: Math.floor(Math.random() * (4 - 0 + 1) + 0)
                        }
                    return resolve(pizza)
                } 
            reject(`An odd number click again): ${numberN}`)
                }, 1000)
        })
    }
    
    document.getElementById('getPizzaFromServerAsync').addEventListener('click', async () => {
        const promise = await getPizzaFromServerAsync()
        setTimeout(() => console.log(promise), 1000)
    })
    
})()

