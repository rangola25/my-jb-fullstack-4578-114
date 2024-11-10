const mira = {
    name: 'mira',
    age: 22,
    gender: 'female',
    city: 'Petch Tiqwa',
}

const yoav = {
    name: 'Yoav',
    age: 22,
    gender: 'male',
    city: 'Herzliya',
}

const beery = {
    name: 'Beery',
    age: 18,
    gender: 'male',
    city: 'Holon',
}

const osher = {
    name: 'Osher',
    age: 22,
    gender: 'male',
    city: 'Givat Shmuel',
}

const friends = [mira, yoav, beery, osher]

// for(const friend of friends) {
//     console.log(`${friend.name} is my friend`)
// }

for(const friend of friends) {
    console.log(`properties of ${friend.name}`)
    for(const property in friend) {
        console.log(`${property} value is ${friend[property]}`)
    }
}

friends.splice(1,1)

for(const friend of friends) {
    console.log(`${friend.name} is my friend`)
}

const musicBands = [
    {
    name: 'Nirvana',
     style: 'Rock'
},
 {
    name: 'Beatles',
     style: 'Rock'
    },
     {
        name: 'Meshina',
         style: 'Israeli'
        }
    ]
 
    console.log(musicBands)