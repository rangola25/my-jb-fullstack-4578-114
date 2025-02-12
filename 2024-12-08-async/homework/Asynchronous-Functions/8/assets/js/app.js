"use strict";

(() => {

    document.getElementById('boom').addEventListener('click', () => {
        const getRandomNumberAfterDelay = (callback) => {
            setTimeout(() => {
                const randomNumber = Math.floor(Math.random() * (100 + 1));
                callback(randomNumber);
            }, 5000);
    } 
  

    const show = (number) => {
         console.log(`The random number is: ${number}`);
    };
     getRandomNumberAfterDelay(show);

    }) 
})()



    


