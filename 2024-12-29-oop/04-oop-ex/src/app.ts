import Mobile from "./mobile.js";

console.log(`total mobiles created ${Mobile.totalMobilesCreate}`)
const iphone = new Mobile('iPhone', 6.9, 5500, 3)
console.log(`total mobiles created ${Mobile.totalMobilesCreate}`)

console.log(iphone)
iphone.sellPrice()
iphone.takePicture()
iphone.turnOff()
iphone.turnOn()

console.log(`total mobiles created ${Mobile.totalMobilesCreate}`)
const samsung = new Mobile('Samsung', 7.2, 4000, 5)
console.log(`total mobiles created ${Mobile.totalMobilesCreate}`)

console.log(samsung)
samsung.sellPrice()
samsung.takePicture()
samsung.turnOff()
samsung.turnOn()