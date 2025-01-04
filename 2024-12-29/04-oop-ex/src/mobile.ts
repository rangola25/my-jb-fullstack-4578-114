export default class Mobile {

    // data members / class fields
    // private type: string
    // private screenSize: number
    // private price: number
    // private numberOfCameras: number
    private pinCode: number = Math.floor((Math.random()) * (9999 - 1000 + 1) + 1000)
    public static totalMobilesCreate: number = 0

    // methods
    public constructor(
        private type: string,
        private screenSize: number,
        private price: number,
        private numberOfCameras: number
        ) {
            Mobile.totalMobilesCreate++
        }

    public sellPrice() {
        console.log(`${this.type} with ${this.screenSize} and ${this.numberOfCameras} for ${this.price} just for now`)
    } 

    public takePicture() {
        console.log(`${this.type}: say cheese...`)
    }

    public turnOn() {
        console.log(`${this.type} turning on...`)
    }

    public turnOff() {
        console.log(`${this.type} turning off...`)
    }


}

