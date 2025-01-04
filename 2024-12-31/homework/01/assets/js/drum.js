import musicalInstruments from "./musicalInstruments.js";
export default class Drum extends musicalInstruments {
    constructor(model, manufacturer, color, diameter) {
        super(model, manufacturer, color);
        this.diameter = diameter;
    }
    display() {
        console.log(`
         model: ${this.model}
         manufacturer: ${this.manufacturer}
         color: ${this.color}
         diameter:${this.diameter}
            `);
    }
    makeSound() {
        console.log('making drum sound');
    }
}
