const shop = [
    {
    name: 'GU',
    city: 'Petch Tiqwa',
    street: 'moshe sne',
    number: 124,
    type: 'goods'
    },
]
 
    const jsonSring = JSON.stringify(shop)
    document.write(jsonSring)
    document.write(`<br>`)

    const GU = JSON.parse(jsonSring)
    console.log(GU)
    

