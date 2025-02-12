"use strict";

( () => {

    setInterval(() => {
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256); 
        const b = Math.floor(Math.random() * 256); 
        const bgColor = `rgb(${r}, ${g}, ${b})`;
        document.body.style.backgroundColor = bgColor;
    }, 1000)

})()

