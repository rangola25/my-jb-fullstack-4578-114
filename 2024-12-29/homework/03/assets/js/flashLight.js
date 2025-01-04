export default class flashLight {
    constructor(color, length, lightIntensity, numberOfBatteries) {
        this.color = color;
        this.length = length;
        this.lightIntensity = lightIntensity;
        this.numberOfBatteries = numberOfBatteries;
    }
    turnOn() {
        console.log(`turnOn`);
    }
    turnOff() {
        console.log(`turnOff`);
    }
    changeTheBatteries() {
        console.log(`batteries changed`);
    }
    details() {
        console.log(`The flashLight color is ${this.color} with the length of ${this.length}, lightIntensity is ${this.lightIntensity} and the numberOfTheBatteries is ${this.numberOfBatteries}`);
    }
}
