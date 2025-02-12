import musicalInstruments from "./musicalInstruments.js";
export default class Guitar extends musicalInstruments {
    constructor(model, manufacturer, color, numberOfStrings) {
        super(model, manufacturer, color);
        this.numberOfStrings = numberOfStrings;
    }
    display() {
        console.log(`
         model: ${this.model}
         manufacturer: ${this.manufacturer}
         color: ${this.color}
         numberOfStrings:${this.numberOfStrings}
            `);
    }
    makeSound() {
        console.log('making guitar sound');
    }
}
