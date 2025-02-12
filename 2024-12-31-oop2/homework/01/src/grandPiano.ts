import Piano from "./piano.js";

export default class grandPiano extends Piano{

    public constructor (
        model: string,
        manufacturer: string,
        color: string,
        numberOfKeys: number,
        public length: number
    ) {
        super(model, manufacturer, color, numberOfKeys)
    }

    public display() {
        console.log(`
         model: ${this.model}
         manufacturer: ${this.manufacturer}
         color: ${this.color}
         numberOfKeys:${this.numberOfKeys}
         length:${this.length}
            `)
    }
}