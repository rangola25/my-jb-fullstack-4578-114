import inheritance from "./inheritance.js";

export default class raceCar extends inheritance{
    public constructor (
        carNum: number,
        madeIn: string,
        type: string,
        color: string,
        engineDisplacement: number,
        public maxSpeed: number,
        public numberOfRaces: number
    ) {
        super(carNum, madeIn, type, color, engineDisplacement)
    }

    public display() {
        console.log(
            `
            ${this.carNum} made in ${this.madeIn}, the type is ${this.type}, color: ${this.color} and the engineDisplacement is ${this.engineDisplacement},
            max speed is ${this.maxSpeed} and number of races are ${this.numberOfRaces}
            `)
    }
}