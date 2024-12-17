"use strict";

(() => {

    // const getRandomColorAfterDelay = (callback) => {
    //     setTimeout(() => {
    //         const colors = ['blue', 'green', 'yellow', 'gray', 'red']
    //         const randomIndex = colors[Math.floor(Math.random() * colors.length)]; 
    //         callback(randomIndex)
    //     }, 3000)
    // }

    // document.getElementById('color').addEventListener('click', () => {
    //     getRandomColorAfterDelay(color => document.body.style.background = color)
    // })

    // const getRandomColorAfterDelay = () => {
    //         const colors = ['blue', 'green', 'yellow', 'gray', 'red']
    //         const randomIndex = colors[Math.floor(Math.random() * colors.length * 2)]; 
    //         if(!randomIndex) throw new Error ('undefind color')
    //         document.body.style.background = randomIndex
    // }

    // document.getElementById('switchColorSync').addEventListener('click', () => {
    //     try {
    //         getRandomColorAfterDelay()
    //     } catch(e) {
    //     console.log(e.message)
    // }
    // })

    ///////////////////////////////////////////////////////////////////////////////////////

    const getRandomColorAfterDelay = (successCallBack, errorCallBack) => {
        setTimeout(() => {
            const colors = ['blue', 'green', 'yellow', 'gray', 'red']
            const randomIndex = colors[Math.floor(Math.random() * colors.length * 2)]; 
            if(!randomIndex) return errorCallBack('undefined color')
            successCallBack(randomIndex)
        }, 2000)
    }
    
    document.getElementById('switchColorAsync').addEventListener('click', () => {
        const colorPIcked = color => {
        document.body.style.background = color
        }
        const failure = error => {
        console.log(error)
       }
       getRandomColorAfterDelay(colorPIcked, failure)
    })

})()

