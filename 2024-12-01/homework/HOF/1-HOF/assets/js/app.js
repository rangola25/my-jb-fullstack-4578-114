let random20 = []

for(i=0; i<20; i++){random20.push((parseInt(Math.random() * (100 - 0 + 1)) + 0))}

//1
const array = random20.forEach(num => console.log(num))
console.log('break')

//2
const double = random20.find(num => num%2 === 0)
console.log(double)
console.log('break')

//3
const biggerThan50 = random20.find(num => num > 50)
console.log(biggerThan50)
console.log('break')

//4
const odd = random20.filter(num => num%2 === 1)
console.log(odd)
console.log('break')

//5
const allBiggerThan50 = random20.filter(num => num > 50)
console.log(allBiggerThan50)
console.log('break')

//6
const indexBiggerThan50 = random20.findIndex(num => num > 50)
console.log(indexBiggerThan50)
console.log('break')

//7
const doubleOrOdd = random20.forEach(num => console.log(num%2 === 0 ? `${num} is even` : `${num} is odd`))
console.log('break')

//8
const min = random20.reduce((currentMin, num) => currentMin < num ? currentMin : num, 200)
console.log(min)
console.log('break')

//9
const max = random20.reduce((currentMax, num) => currentMax > num ? currentMax : num, -1)
console.log(max)
console.log('break')