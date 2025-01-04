"use strict";

(() => {

    const getData = (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateStatsHTML = users => {
        const totalUsers = users.length;

        const averageLatitude = users
            .map(user => parseInt(user.address.geo.lat)) 
            // console.log(averageLatitude)
            .reduce((acc, lat) => acc + lat, 0)  / totalUsers  

        const averageLongitude = users
            .map(user => parseInt(user.address.geo.lng)) 
            .reduce((acc, lat) => acc + lat, 0)  / totalUsers  

        return `
            <tr>
                <td>Total users:</td>
                <td>${totalUsers}</td>
            </tr>

            <tr>
                <td>Average Latitude:</td>
                <td>${averageLatitude}</td> 
            </tr>

            <tr>
                <td>Average Longitude:</td>
                <td>${averageLongitude}</td> 
            </tr>
        `;
    }

    const generateMailHTML = users => {
         // Use reduce to accumulate counts of domain extensions
         const domainCounts = users
         .map(user => user.email.split('@')[1].split('.')[1])  // Get domain extensions
         .reduce((acc, domainExtension) => {
             // Update count for the domain extension
             acc[domainExtension] = (acc[domainExtension] || 0) + 1;
             return acc;
         }, {});  // Initia
         // l accumulator is an empty object

     // Generate the HTML for displaying the domain counts
     return Object.entries(domainCounts)
         .map(([extension, count]) => `
             <tr>
                 <td>${extension}</td>
                 <td>${count}</td>
             </tr>
         `)
         .join('');
 }
    

    const generateHTML = users => {
        const newHTML = users
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

    const renderStatsHTML = newHTML => document.getElementById('stats').innerHTML = newHTML

    const renderMailHTML = newHTML => document.getElementById('mail').innerHTML = newHTML

    const renderHTML = newHTML => document.getElementById('users').innerHTML = newHTML

    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const users = await getData('https://jsonplaceholder.typicode.com/users')

            // generate html
            const newHTML = generateHTML(users)
            const newStatsHTML = generateStatsHTML(users)
            const newMailHTML = generateMailHTML(users)

            // render html=
            renderHTML(newHTML)
            renderStatsHTML(newStatsHTML)
            renderMailHTML(newMailHTML)
            
        } catch (e) {
            console.warn(e)
        }
    })

})()


