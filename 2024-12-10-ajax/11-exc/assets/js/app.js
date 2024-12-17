"use strict";

(() => {

    const getData = (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateStatsTable = missions => {
        const totalMissions = missions.length
        const done = missions.filter(mission => mission.completed).length
        const completeRatio = done/totalMissions * 100

        return `
            <tr>
                <td>Total todos:</td>
                <td>${totalMissions}</td>
            </tr>

            <tr>
                <td>Completed:</td>
                <td>${done}</td>
            </tr>

            <tr>
                <td>Not completed:</td>
                <td>${totalMissions - done}</td>
            </tr>

            <tr>
                <td>Complete ratio:</td>
                <td>${completeRatio}%</td>
            </tr>
        `
    }

    const generateUsersTable = missions => {
        const result = missions.reduce((cumulative, current) => {
            const { userId, completed } = current

            let exitingObjectIndex = cumulative.findIndex(user => user.userId === current.userId)
            if(exitingObjectIndex === -1) {
                cumulative.push({
                    userId,
                    completed: 0,
                    incompleted: 0
                })
                exitingObjectIndex = cumulative.findIndex(user => user.userId === current.userId)
            }

            cumulative[exitingObjectIndex].completed += completed ? 1 : 0
            cumulative[exitingObjectIndex].incompleted += completed ? 0 : 1

            return cumulative
        }, [])
        .map(user => 
             `
            <tr>
                <td>${user.userId}</td>
                <td>${user.completed}</td>
                <td>${user.incompleted}</td>
            </tr>
        `
        )
        .reduce((cumulative, current) => cumulative + current, '')

        //console.log(result)

        return result
            }

    const generateTodosTable = missions => {
        const newHTML = missions
            .map(mission => {
                const { userId, title, completed } = mission // deconstruction
                return `
                    <tr>
                        <td>${userId}</td>
                        <td>${title}</td>
                        <td>${completed  ? 'Yes' : 'No'}</td>
                    </tr>
                `
            })
            .reduce((cumulative, current) => cumulative + current, '')
        return newHTML
    }

    const renderTodosHTML = newHTML => document.getElementById('missions').innerHTML = newHTML

    const renderStatsTable = newHTML => document.getElementById('stats').innerHTML = newHTML

    const renderUsersTable = newHTML => document.getElementById('users').innerHTML = newHTML

    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const todos = await getData('https://jsonplaceholder.typicode.com/todos')

            // generate html
            const todosTableHTML = generateTodosTable(todos)
            const statsTableHTML = generateStatsTable(todos)
            const usersTableHTML = generateUsersTable(todos)

            // render html=
            renderTodosHTML(todosTableHTML)
            renderStatsTable(statsTableHTML)
            renderUsersTable(usersTableHTML)
            
        } catch (e) {
            console.warn(e)
        }
    })

})()


