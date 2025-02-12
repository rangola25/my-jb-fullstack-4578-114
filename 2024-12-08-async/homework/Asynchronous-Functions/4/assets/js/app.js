"use strict";

(() => {
    console.log('start')
    setTimeout(() => {console.log(Math.floor(Math.random() * (100 - 0 + 1)) + 0)}, 3000) 
    setTimeout(() => {console.log(Math.floor(Math.random() * (100 - 0 + 1)) + 0)}, 5000)
    setTimeout(() => {console.log(Math.floor(Math.random() * (100 - 0 + 1)) + 0)}, 7000)
    console.log('end')
})()

