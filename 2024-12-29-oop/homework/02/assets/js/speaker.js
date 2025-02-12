export default class speaker {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    turnOn() {
        console.log(`turnOn`);
    }
    turnOff() {
        console.log(`turnOff`);
    }
    sound() {
        console.log(`play some sound`);
    }
    details() {
        console.log(`The color of the speaker is ${this.color} and the volume is ${this.volume}`);
    }
}
