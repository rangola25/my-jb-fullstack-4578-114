export default class flashLight{

    public constructor (
        public color: string,
        public length: number,
        public lightIntensity: string,
        public numberOfBatteries: number
    ) {}

    public turnOn() {
        console.log(`turnOn`)
    }

    public turnOff() {
        console.log(`turnOff`)
    }

    public changeTheBatteries() {
        console.log(`batteries changed`)
    }

    public details() {
        console.log(`The flashLight color is ${this.color} with the length of ${this.length}, lightIntensity is ${this.lightIntensity} and the numberOfTheBatteries is ${this.numberOfBatteries}`)
    }
    
}