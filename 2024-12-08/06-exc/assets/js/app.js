"use strict";

(() => {

    const getPower = (num, successCallBack, errorCallBack) => {
        setTimeout(() => {
            if(num % 3 === 0){
                 return errorCallBack('the numbers must not divide by 3')
            }
            successCallBack(num ** 2)
        }, 2000)
    }
    
    document.getElementById('switchColorAsync').addEventListener('click', () => {
        const num = +prompt('enter a number')
       getPower(num, result => console.log(`${num} ** 2 = ${result}`), error => console.log(error))
    })

})()

