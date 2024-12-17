"use strict";

(() => {

    const getData = (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateHTML = users => {
        const whichUser = +document.getElementById('whichUser').value
        const newHTML = users
            .filter(user => user.id === whichUser)
            .map(user => {
                const { name, username, email, phone, address, company  } = user // deconstruction
                return `
                    <tr>
                        <td>${name}</td>
                        <td>${username}</td>
                        <td>${email}</td>
                        <td>${phone}</td>
                        <td>${address.city}</td>
                        <td>${address.street}</td>
                        <td>${address.zipcode}</td>
                        <td>${company.name}</td>
                    </tr>
                `
            })
            .reduce((cumulative, current) => cumulative + current, '')
        return newHTML
    }

    const renderHTML = newHTML => document.getElementById('users').innerHTML = newHTML

    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const users = await getData('https://jsonplaceholder.typicode.com/users')

            // generate html
            const newHTML = generateHTML(users)
            

            // render html=
            renderHTML(newHTML)
            
            
        } catch (e) {
            console.warn(e)
        }
    })

})()


