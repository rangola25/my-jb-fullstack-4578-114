"use strict";

( () => {

        document.getElementById('boo').addEventListener('click', () => {
        document.body.style.backgroundColor = "Green";
        setTimeout(() => {
        alert("Done");
        }, 1000)
    })

})()

