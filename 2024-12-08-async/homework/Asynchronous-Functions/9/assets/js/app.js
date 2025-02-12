"use strict";

(() => {

    document.getElementById('boom').addEventListener('click', () => {
        const getRandomNumberAfterDelay = (callback) => {
            const limit = document.getElementById('limit').value
            setTimeout(() => {
                const randomNumber = Math.floor(Math.random() * (limit - 0 + 1) + 0);
                callback(randomNumber);
            }, 1000);
    } 
  

    const show = (number) => {
         console.log(`The random number is: ${number}`);
    };
     getRandomNumberAfterDelay(show);

    }) 
})()



    


