export default class inheritance{

    public constructor (
        public carNum: number,
        public madeIn: string,
        public type: string,
        public color: string,
        public engineDisplacement: number
    ) {}

    public display() {
        console.log(
            `
            ${this.carNum} made in ${this.madeIn}, the type is ${this.type}, color: ${this.color} and the engineDisplacement is ${this.engineDisplacement}
            `)
    }
    
}