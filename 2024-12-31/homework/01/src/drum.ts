import musicalInstruments from "./musicalInstruments.js"

export default class Drum extends musicalInstruments {

    public constructor (
        model: string,
        manufacturer: string,
        color: string,
        public diameter: number
    ) {
        super(model, manufacturer, color)
    }

    public display() {
        console.log(`
         model: ${this.model}
         manufacturer: ${this.manufacturer}
         color: ${this.color}
         diameter:${this.diameter}
            `)
    }

    makeSound() {
        console.log('making drum sound')
    }
}