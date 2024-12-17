"use strict";

(() => {

    const generateStrongPasswordAsync = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const code = []
                for(let i=0; i<6; i++) {
                const randomChoice = Math.floor(Math.random() * 3);
            if (randomChoice === 0) {
                code.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
            } else if (randomChoice === 1) {
                code.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
            } else {
                code.push(Math.floor(Math.random() * 10));  
            }
        }
        const word = code.join('');
                if(/[a-z]/.test(word) && /[A-Z]/.test(word) && /\d/.test(word)){
                    return resolve(`Your new password is: ${word}`)
                } 
            reject(`error try again):`)
                }, 1000)
        })
    }
    
    document.getElementById('generateStrongPasswordAsync').addEventListener('click', async () => {
        const promise = await generateStrongPasswordAsync()
        setTimeout(() => console.log(promise), 1000)
    })
    
})()

