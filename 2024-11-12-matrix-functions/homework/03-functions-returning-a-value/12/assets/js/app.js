function getRandom (min, max) {
   let rand = (parseInt(Math.random() * (max-min+1)) + min)
   return rand
}

console.log(getRandom(1, 10))
console.log(getRandom(300, 400))