import Piano from "./piano.js";
export default class grandPiano extends Piano {
    constructor(model, manufacturer, color, numberOfKeys, length) {
        super(model, manufacturer, color, numberOfKeys);
        this.length = length;
    }
    display() {
        console.log(`
         model: ${this.model}
         manufacturer: ${this.manufacturer}
         color: ${this.color}
         numberOfKeys:${this.numberOfKeys}
         length:${this.length}
            `);
    }
}
