"use strict";

(() => {

    const getData = (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateHTML = jokes => jokes.value
        // const newHTML = jokes
        //     .map(joke => {
        //         const { value } = joke // deconstruction
        //         return `
        //          <h3>${value}</h3>
        //         `
        //     })
        //     .reduce((cumulative, current) => cumulative + current, '')
        // return newHTML
    

    const renderHTML = newHTML => document.getElementById('joke').innerHTML = newHTML

    document.getElementById('button').addEventListener('click',() => {
        try {
            setInterval(async () => {
            // get data
            const pictures = await getData('https://api.chucknorris.io/jokes/random')

            // generate html
            const newHTML = generateHTML(pictures)

            // render html
            renderHTML(newHTML)
        }, 5000)
        } catch (e) {
            console.warn(e)
        }
    })

})()


