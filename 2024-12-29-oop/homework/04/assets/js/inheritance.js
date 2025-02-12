export default class inheritance {
    constructor(carNum, madeIn, type, color, engineDisplacement) {
        this.carNum = carNum;
        this.madeIn = madeIn;
        this.type = type;
        this.color = color;
        this.engineDisplacement = engineDisplacement;
    }
    display() {
        console.log(`
            ${this.carNum} made in ${this.madeIn}, the type is ${this.type}, color: ${this.color} and the engineDisplacement is ${this.engineDisplacement}
            `);
    }
}
