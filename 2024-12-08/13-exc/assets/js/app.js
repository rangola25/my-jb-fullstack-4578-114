"use strict";

(() => {

     const getPower = (num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(num % 3 === 0){
                    return reject('the numbers must not divide by 3')
                }
                resolve(num ** 2)
                }, 2000)
        })
    }
    
    let result = 0;
    document.getElementById('switchColorAsync').addEventListener('click', async () => {
        const num = +prompt('enter a number')
        try {
            result = await getPower(num)
            console.log(`${num} ** 2 = ${result}`)
        } catch (e) {
            console.log(e)
        }     
    })
    

})()

