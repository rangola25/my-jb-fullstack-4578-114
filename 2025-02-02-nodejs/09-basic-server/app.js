const { createServer } = require('http')

const user = {
    name: 'Yuval',
    email: 'yuval@gmail.com',
    age: 23
}

const list = `
name,age,phone
ido,23,55555
mishel,23,44444
daniel,32,33333
`

const requestListener = (request, response) => {
    switch(request.url) {
        case '/user':
            response.setHeader('Content-type', 'application/json')
            response.end(JSON.stringify(user))
            break;
        case '/list':
            response.setHeader('Content-type', 'text/csv')
            response.end(JSON.stringify(list))
            break;
        case '/user':
            response.end('unknown operation')
            break;   
    }
}

createServer(requestListener).listen(3000, () => console.log('server started on port 3000...'))