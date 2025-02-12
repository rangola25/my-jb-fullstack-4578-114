const random20 = []

for(i=0; i<20; i++){
    let xAndY = {
        X: parseInt(Math.random() * (100 - 0 + 1)) + 0,
        Y: parseInt(Math.random() * (100 - 0 + 1)) + 0
    }
    random20.push(xAndY)
}

//1
random20.forEach(object => console.log(object))
console.log('break')

//2
const xBiggerThanY = random20.find(object => object.X > object.Y)
console.log(xBiggerThanY)
console.log('break')

//3
const yBiggerThan50 = random20.find(object => object.Y > 50)
console.log(yBiggerThan50)
console.log('break')

//4
const xOdd = random20.filter(num => num.X%2 === 1)
console.log(xOdd)
console.log('break')

//5
const allYBiggerThan50 = random20.filter(object => object.Y > 50)
console.log(allYBiggerThan50)
console.log('break')

//6
const xIndexBiggerThan50 = random20.findIndex(num => num.X > 50)
console.log(xIndexBiggerThan50)
console.log('break')

//7
const distanceTo00 = random20.forEach(num => console.log(Math.sqrt(num.X ** 2 + num.Y ** 2)))
console.log('break')

//8
const min = random20.reduce((currentMin, num) => currentMin.X < num.X ? currentMin.X : num.X, 200)
console.log(min)
console.log('break')

//9
const minObject = random20.reduce((currentMin, num) => currentMin.X < num.X ? currentMin : num, 200)
console.log(minObject)
