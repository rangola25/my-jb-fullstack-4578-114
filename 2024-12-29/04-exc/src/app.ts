import Phone from "./phone.js"

const iphone = new Phone()
iphone.pType = 'iphone12'
iphone.screenSize = '6inch'
iphone.price = 2000
iphone.numberOfCameras = 3

console.log(iphone)
iphone.takePicture()
iphone.turnOn()
iphone.turnOff()

const samsung = new Phone()
samsung.pType = 'samsungGalaxy21'
samsung.screenSize = '8inch'
samsung.price = 1800
samsung.numberOfCameras = 2

console.log(samsung)
samsung.takePicture()
samsung.turnOn()
samsung.turnOff()

