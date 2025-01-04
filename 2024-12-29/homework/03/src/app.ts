import flashLight from './flashLight.js'

const mega = new flashLight(
    'blue',
    12,
    'High',
    4
)

mega.details()
mega.turnOff()
mega.turnOn()
mega.changeTheBatteries()

const tiny = new flashLight(
    'yellow',
    8,
    'low',
    2
)

tiny.details()
tiny.turnOff()
tiny.turnOn()
tiny.changeTheBatteries()