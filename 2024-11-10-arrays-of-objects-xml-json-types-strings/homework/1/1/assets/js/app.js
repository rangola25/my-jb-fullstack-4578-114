const cars = [
    {
    model: 'volvo',
    year: 1998,
    color: 'gray'
},

  {
    model: 'reno',
    year: 2007,
    color: 'black'
},

 {
    model: 'suzuki',
    year: 2024,
    color: 'blue'
}
]

// 1.1
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])

// 1.2
for (const property in cars) {
    console.log(JSON.stringify(cars[property]));
    };

// for(const friend of friends) {
//     console.log(`properties of ${friend.name}`)
//     for(const property in friend) {
//         console.log(`${property} value is ${friend[property]}`)
//     }
// }