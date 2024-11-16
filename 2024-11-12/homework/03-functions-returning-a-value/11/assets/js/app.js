function isPrime (b) {
  for (let cell of b) {
  if (typeof cell !== 'number') return
  
  for (let i = 2; i <= cell/2; i++){
     if(cell % i === 0) {
        return false
     }
  }
  return true
}
}

console.log(isPrime([2,5,7]))
console.log(isPrime([10,20,30]))