"use strict";

(() => {

    const getRandomColorAfterDelay = (callback) => {
        setTimeout(() => {
            const colors = ['blue', 'green', 'yellow', 'gray', 'red']
            const randomIndex = colors[Math.floor(Math.random() * colors.length)]; 
            callback(randomIndex)
        }, 3000)
    }

    document.getElementById('color').addEventListener('click', () => {
        getRandomColorAfterDelay(color => document.body.style.background = color)
    })

})()

