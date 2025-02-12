export default class speaker{

    public constructor (
        public color: string,
        public volume: string
    ) {}

    public turnOn() {
        console.log(`turnOn`)
    }

    public turnOff() {
        console.log(`turnOff`)
    }

    public sound() {
        console.log(`play some sound`)
    }

    public details() {
        console.log(`The color of the speaker is ${this.color} and the volume is ${this.volume}`)
    }
    
}