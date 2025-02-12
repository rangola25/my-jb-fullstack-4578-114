const shoppingCart = [
    {
        id: 1,
        name: 'Lenovo laptop',
        price: 1000
    },
    {
        id: 2,
        name: 'Hp screen 25',
        price: 600
    },
    {
        id: 3,
        name: 'Logitech mouse',
        price: 20
    }
]

localStorage.setItem('products', JSON.stringify(shoppingCart))

const info = JSON.parse(localStorage.getItem('products'))
console.log(info)