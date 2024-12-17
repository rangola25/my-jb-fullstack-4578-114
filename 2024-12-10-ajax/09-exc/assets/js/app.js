"use strict";

(() => {

    const getData = (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateHTML = pictures => {
        const newHTML = pictures
            .map(picture => {
                const { title, thumbnailUrl } = picture // deconstruction
                return `
                    <tr>
                <td>${title}</td>
                <td><img src="${thumbnailUrl}"></td>
                    </tr>
                `
            })
            .reduce((cumulative, current) => cumulative + current, '')
        return newHTML
    }

    const renderHTML = newHTML => document.getElementById('pictures').innerHTML = newHTML

    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const pictures = await getData('https://jsonplaceholder.typicode.com/photos')

            // generate html
            const newHTML = generateHTML(pictures)

            // render html
            renderHTML(newHTML)
            
        } catch (e) {
            console.warn(e)
        }
    })

})()


