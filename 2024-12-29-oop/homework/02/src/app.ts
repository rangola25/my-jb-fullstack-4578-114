import speaker from './speaker.js'

const mega = new speaker(
    'blue',
    'High'
)

mega.details()
mega.turnOff()
mega.turnOn()
mega.sound()

const tiny = new speaker(
    'yellow',
    'low'
)

tiny.details()
tiny.turnOff()
tiny.turnOn()
tiny.sound()