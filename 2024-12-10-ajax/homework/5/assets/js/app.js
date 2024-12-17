"use strict";

(() => {

    const getData = (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateHTML = response => {
        const users = response.data;
    
        const newHTML = users
            .map(user => {
                const { first_name, last_name, email, avatar } = user;
                return `
                    <tr>
                        <td>${first_name}</td>
                        <td>${last_name}</td>
                        <td>${email}</td>
                        <td><img src="${avatar}" alt="${first_name}'s avatar"></td>
                    </tr>
                `;
            })
            .reduce((cumulative, current) => cumulative + current, '');
    
        return newHTML;
    };
    

    const renderHTML = newHTML => document.getElementById('users').innerHTML = newHTML

    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const users = await getData('https://reqres.in/api/users')

            // generate html
            const newHTML = generateHTML(users)
            

            // render html
            renderHTML(newHTML)
            
        } catch (e) {
            console.warn(e)
        }
    })

})()


