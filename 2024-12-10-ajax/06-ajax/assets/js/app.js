"use strict";

(() => {

    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const url = 'https://jsonplaceholder.typicode.com/users'
            const response = await fetch(url)
            const users = await response.json()
            console.log(users)
            
            // generate html
            const newHTML = users.map(user => {
                const { name, email } = user // deconstruction
                return `
                    <li>name: ${name}, email: ${email}</li>
                `
            }).reduce((cumulative, current) => cumulative + current, '')
            console.log(newHTML)

            // render html
            document.getElementById('users').innerHTML = newHTML

        } catch (e) {
            console.warn(e)
        }
    })

})()


