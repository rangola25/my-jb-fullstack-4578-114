"use strict";

(() => {
    console.log('start')
    let currentTime = new Date();
    setTimeout(() => {
    console.log(currentTime);
    }, 3000) 
    console.log('end')
})()

