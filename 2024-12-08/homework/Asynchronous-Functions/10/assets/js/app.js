"use strict";

(() => {

    document.getElementById('boom').addEventListener('click', () => {
        const getRandomNumberAfterDelay = (callback) => {
            const first = document.getElementById('first').value
            const last = document.getElementById('last').value
            setTimeout(() => {
                const randomNumber = Math.floor(Math.random() * (Number(last) - Number(first) + 1)) + Number(first);
                callback(randomNumber);
            }, 1000);
    } 
  

    const show = (number) => {
         console.log(`The random number is: ${number}`);
    };
     getRandomNumberAfterDelay(show);
    }) 

})()



    


