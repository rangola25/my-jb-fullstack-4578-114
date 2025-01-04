const carMake = 'Opal'
const carModel = 'Corsa'
const catYear = 2012
const carPrice = 13000

function igniteCar(carMake: string) {
    console.log(`ignited... you can now drive your ${carMake}`)
}

const car = {
    make: 'Opal',
    model: 'Corsa',
    year: 2012,
    price: 13000,
    igniteCar: (carMake: string) => {
        console.log(`ignited... you can now drive your ${carMake}`)
    }
}

const anotherCar = {
    make: 'BMW',
    model: '535i',
    diesel: true,
    year: 2012,
    price: 13000,
    igniteCar: (carMake: string) => {
        console.log(`ignited... you can now drive your ${carMake}`)
    }
}

type Car = {
    make: string,
    model: string,
    year: number,
    diesel: boolean,
    price: number,
    ignite: Function        
}