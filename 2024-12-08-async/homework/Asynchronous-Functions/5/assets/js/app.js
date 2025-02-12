"use strict";

const amazing = () => {

    const randomNumberDiv = document.getElementById('randomNumber');
    const maxNumInput = document.getElementById('maxNum');

    const generateRandomNumber = () => {
        const max = Number(maxNumInput.value);  
        const randomNumber = Math.floor(Math.random() * (max + 1)); 
        randomNumberDiv.textContent = randomNumber;  
    };

    setInterval(generateRandomNumber, 1000);

    maxNumInput.addEventListener('input', generateRandomNumber);
}

