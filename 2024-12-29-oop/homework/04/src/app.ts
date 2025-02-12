import inheritance from './inheritance.js'
import raceCar from './raceCar.js'

const subaru = new inheritance(
    12365478,
    'china',
    'subaru',
    'black',
    1000
)

subaru.display()

const ThrustSSC = new raceCar(
    1,
    'italy',
    'ThrustSSC',
    'red',
    35000,
    379,
    7
)

ThrustSSC.display()
