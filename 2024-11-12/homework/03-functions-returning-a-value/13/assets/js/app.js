function getRandom (num) {
   let group = []
   for(i=1; i<=num; i++){
   let rand = (parseInt(Math.random() * (100-1+1)) + 1)
   group.push(rand)
   }
   return group
}

console.log(getRandom(10))
console.log(getRandom(15))
console.log(getRandom(6))