const getRandomBetween0And100 = () => Math.floor(Math.random() * 101)

const getRandomPoint = () => ({
    x: getRandomBetween0And100(),
    y: getRandomBetween0And100()
})

const points = []
for (let i=0; i<20; i++) {
    points.push(getRandomPoint())
}

console.log('all the points')
points.forEach(point => console.log(point))

console.log('first point where x > y')
console.log(points.find(point => point.x > point.y))