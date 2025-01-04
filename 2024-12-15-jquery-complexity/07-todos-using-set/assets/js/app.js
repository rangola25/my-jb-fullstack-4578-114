

"use strict";

(() => {

    const getData = (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateUsersTable = todos => {

        
        
        
        // const userIds = todos.map(todo => todo.userId)
        // const usersSet = new Set(userIds)
        // const userIdsUnique = [...usersSet]
        const userIdsUnique = [...new Set(todos.map(todo => todo.userId))]
        const result = userIdsUnique
            // .map(userId => {
            //     return {
            //         userId,
            //         completed: todos.filter(todo => todo.userId === userId && todo.completed).length,
            //         incompleted: todos.filter(todo => todo.userId === userId && !todo.completed).length 
            //     }
            // })
            .map(userId => ({
                    userId,
                    completed: todos.filter(todo => todo.userId === userId && todo.completed).length,
                    incompleted: todos.filter(todo => todo.userId === userId && !todo.completed).length 
                })
            )
            .map(user => `
                <tr>
                    <td>${user.userId}</td>
                    <td>${user.completed}</td>
                    <td>${user.incompleted}</td>
                </tr>
            `)
            .reduce((cum, cur) => cum + cur, '')



        // console.log(userIds)

        // const result = todos

        // // complete missing code...

        // console.log(result)

        return result
    }

    const generateStatsTable = todos => {

        const totalTodos = todos.length
        const completedTodos = todos.filter(todo => todo.completed).length
        const incompletedTodos = totalTodos - completedTodos
        const completeRatio = completedTodos/totalTodos * 100

        return `
            <tr>
                <td>total todos:</td>
                <td>${totalTodos}</td>
            </tr>
            <tr>
                <td>total completed todos:</td>
                <td>${completedTodos}</td>
            </tr>
            <tr>
                <td>total incompleted todos:</td>
                <td>${incompletedTodos}</td>
            </tr>
            <tr>
                <td>complete ratio:</td>
                <td>${completeRatio}%</td>
            </tr>
        `
    }

    const generateTodosTable = todos => {
        const newHTML = todos
            .map(todo => {
                const { userId, title, completed } = todo // deconstruction
                return `
                    <tr>
                        <td>${userId}</td>
                        <td>${title}</td>
                        <td>${completed ? 'Yes' : 'No'}</td>
                    </tr>
                `
            })
            .reduce((cumulative, current) => cumulative + current, '')
        return newHTML
    }

    const renderTodosTable = newHTML => document.getElementById('todos').innerHTML = newHTML

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

            // render html
            renderTodosTable(todosTableHTML)
            renderStatsTable(statsTableHTML)
            renderUsersTable(usersTableHTML)
            
        } catch (e) {
            console.warn(e)
        }
    })

})()


