"use strict";

(() => {

    const getData = (url) => {
        return fetch(url).then(response => response.json())
    }

    const generateHairColorHTML = data => {
        const totalUsers = data.users
            .map(user => user.hair.color)
            .reduce((userHairColor, current) => {
                const existingHairColor = userHairColor.find(HairColor => HairColor.hairColor === current)
                if(!existingHairColor) userHairColor.push({
                    hairColor: current,
                    count: 1
            })
            else existingHairColor.count++
            return userHairColor
        }, [])
                const newHTML = totalUsers
                .map(hairColorData => {
                    return `
                        <tr>
                            <td>${hairColorData.hairColor}</td>
                            <td>${hairColorData.count}</td>
                        </tr>
                    `;
                })
                .join('');
                 return newHTML;
    }

    const generateAgeHTML = data => {
        const totalUsers = data.users
            .map(user => user.id).length
        const averageAge = data.users
            .map(user => user.age)
            .reduce((age, current) => age + current, 0) / totalUsers
                return `
                    <tr>
                    <td>${averageAge}</td>
                    </tr>
                `
    }

    const generateHTML = data => {
        const newHTML = data.users
            .map(user => {
                const { id, firstName, lastName, age, gender, address } = user 
                return `
                    <tr>
                    <td>${id}</td>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${age}</td>
                    <td>${gender}</td>
                    <td>${address.address}</td>
                    <td>${address.coordinates.lat}</td>
                    <td>${address.coordinates.lng}</td>
                    </tr>
                `
            })
            .reduce((cumulative, current) => cumulative + current, '')
        return newHTML
    }

    const renderHairColorHTML = newHTML => document.getElementById('userHairColor').innerHTML = newHTML

    const renderAgeHTML = newHTML => document.getElementById('userAge').innerHTML = newHTML

    const renderHTML = newHTML => document.getElementById('userInfoBody').innerHTML = newHTML

    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const users = await getData('https://dummyjson.com/users')

            // generate html
            const hairColor = generateHairColorHTML(users)
            const averageAge = generateAgeHTML(users)
            const newHTML = generateHTML(users)

            // render html
            renderHairColorHTML(hairColor)
            renderAgeHTML(averageAge)
            renderHTML(newHTML)
            
        } catch (e) {
            console.warn(e)
        }
    })

})()


