function isPrime (a) {
  if (a % 2 !== 0 && a % 3 !== 0 && a % 5 !== 0 && a % 7 !== 0 && a !== 2 && a !== 3 && a !== 5 && a !== 7) {
   return console.log(`${a} Is prime`)      
  }
  return console.log(`${a} Is not prime`)
}

isPrime(11)
isPrime(10)
isPrime(9)


function isPrime2 (b) {
  if (typeof b !== 'number') return
  
  for (let i = 2; i <= b/2; i++){
     if(b % i === 0) {
        return false
     }
  }
  return true
}

const b = +prompt('enter a number')
console.log(`${b} is prime? ${isPrime2(b)}`) 