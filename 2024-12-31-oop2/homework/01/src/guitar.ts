import musicalInstruments from "./musicalInstruments.js"

export default class Guitar extends musicalInstruments {

    public constructor (
        model: string,
        manufacturer: string,
        color: string,
        public numberOfStrings: number
    ) {
        super(model, manufacturer, color)
    }

    public display() {
        console.log(`
         model: ${this.model}
         manufacturer: ${this.manufacturer}
         color: ${this.color}
         numberOfStrings:${this.numberOfStrings}
            `)
    }

    makeSound() {
        console.log('making guitar sound')
    }
}