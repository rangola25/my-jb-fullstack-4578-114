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
    
    document.getElementById('switchColorAsync').addEventListener('click', () => {
        const num = +prompt('enter a number')
        const promise = getPower(num)
        console.log(promise)
        setTimeout(() => console.log(promise), 4000)
    })
      

})()

