import Cat from "./cat.js"

export default class SiameseCat extends Cat{

    public constructor (
        color: string,
        breed: string,
        price: number,
        numberOfSoulsLeft: number,
        private readonly origin: string = 'Thailand'
    ) {
        super(color, breed, price, numberOfSoulsLeft)
    }

    public display() {
        super.display()
        console.log(this.origin)
    }

}