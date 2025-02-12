export default class Phone {
    pType: string
    screenSize: string
    price: number
    numberOfCameras: number

    takePicture() {
        console.log(`say cheese...`)
        }

    turnOn() {
        console.log(`${this.pType} turning on...`)
        }
        
    turnOff() {
    console.log(`${this.pType} turning off...`)
        }
}