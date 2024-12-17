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
        getPower(num).then(result => {
            return console.log(`${num} ** 2 = ${result}`)
        })
        .catch(error => console.log(error));
    })
        //  result => console.log(`${num} ** 2 = ${result}`), error => console.log(error)
    

})()

