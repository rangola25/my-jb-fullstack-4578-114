import Cat from "./cat.js";
export default class SiameseCat extends Cat {
    constructor(color, breed, price, numberOfSoulsLeft, origin = 'Thailand') {
        super(color, breed, price, numberOfSoulsLeft);
        this.origin = origin;
    }
    display() {
        super.display();
        console.log(this.origin);
    }
}
