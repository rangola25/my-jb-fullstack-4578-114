import Cat from './cat.js'
import Dog from './dog.js'
import Fish from './fish.js'
import SiameseCat from './siamese-cat.js'

const gingo = new Cat(
    'orange',
    'mixed',
    1000,
    3
)

gingo.display()
gingo.inhale()
console.log(gingo.getPrice())

const lucky = new Dog(
    'gold',
    'chinese pug',
    5000,
    true
)

lucky.display()
console.log(lucky.getBreed())

const blue = new Fish(
    'blue',
    'mixed',
    100,
    true
)

blue.display()

const mimi = new SiameseCat(
    'white',
    'siamese',
    10000,
    7
)

mimi.display()
