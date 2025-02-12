class Mobile {
    // methods
    constructor(type, screenSize, price, numberOfCameras) {
        this.type = type;
        this.screenSize = screenSize;
        this.price = price;
        this.numberOfCameras = numberOfCameras;
        // data members / class fields
        // private type: string
        // private screenSize: number
        // private price: number
        // private numberOfCameras: number
        this.pinCode = Math.floor((Math.random()) * (9999 - 1000 + 1) + 1000);
        Mobile.totalMobilesCreate++;
    }
    sellPrice() {
        console.log(`${this.type} with ${this.screenSize} and ${this.numberOfCameras} for ${this.price} just for now`);
    }
    takePicture() {
        console.log(`${this.type}: say cheese...`);
    }
    turnOn() {
        console.log(`${this.type} turning on...`);
    }
    turnOff() {
        console.log(`${this.type} turning off...`);
    }
}
Mobile.totalMobilesCreate = 0;
export default Mobile;
