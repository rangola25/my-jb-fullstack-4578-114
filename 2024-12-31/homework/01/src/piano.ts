import musicalInstruments from "./musicalInstruments.js"
import Tester from "./tester.js"

export default class Piano extends musicalInstruments implements Tester {

    public constructor  (
        model: string,
        manufacturer: string,
        color: string,
        public numberOfKeys: number
    ) {
        super(model, manufacturer, color)
    }

    public display() {
        console.log(`
         model: ${this.model}
         manufacturer: ${this.manufacturer}
         color: ${this.color}
         numberOfKeys:${this.numberOfKeys}
            `)
    }

    makeSound() {
        console.log('making piano sound')
    }

    test(): void {
        console.log('Testing the piano')
    }

    tune(): void {
        console.log('Tuning the piano')
    }
}