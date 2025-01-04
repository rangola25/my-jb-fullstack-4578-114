import inheritance from "./inheritance.js";
export default class raceCar extends inheritance {
    constructor(carNum, madeIn, type, color, engineDisplacement, maxSpeed, numberOfRaces) {
        super(carNum, madeIn, type, color, engineDisplacement);
        this.maxSpeed = maxSpeed;
        this.numberOfRaces = numberOfRaces;
    }
    display() {
        console.log(`
            ${this.carNum} made in ${this.madeIn}, the type is ${this.type}, color: ${this.color} and the engineDisplacement is ${this.engineDisplacement},
            max speed is ${this.maxSpeed} and number of races are ${this.numberOfRaces}
            `);
    }
}
