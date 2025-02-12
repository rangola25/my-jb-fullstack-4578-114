import musicalInstruments from "./musicalInstruments.js";
export default class Piano extends musicalInstruments {
    constructor(model, manufacturer, color, numberOfKeys) {
        super(model, manufacturer, color);
        this.numberOfKeys = numberOfKeys;
    }
    display() {
        console.log(`
         model: ${this.model}
         manufacturer: ${this.manufacturer}
         color: ${this.color}
         numberOfKeys:${this.numberOfKeys}
            `);
    }
    makeSound() {
        console.log('making piano sound');
    }
    test() {
        console.log('Testing the piano');
    }
    tune() {
        console.log('Tuning the piano');
    }
}
