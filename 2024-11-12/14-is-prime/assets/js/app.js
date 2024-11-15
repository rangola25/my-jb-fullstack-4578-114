function isPrime (a) {
   if (a % 2 !== 0 && a % 3 !== 0 && a % 5 !== 0 && a % 7 !== 0 && a !== 2 && a !== 3 && a !== 5 && a !== 7) {
    return console.log(`${a} Is prime`)      
   }
   return
   return console.log(`${a} Is not prime`)
}

// isPrime(11)
// isPrime(10)
// isPrime(9)
// isPrime(ran)


function isPrime2 (b) {
   if(isNaN(num)) return
   if (typeof num !== 'number') return
   
   for (let i = 2; i < b; i++){
      if(num % i === 0) {
         return false
      }
   }
   return true
}

const b = +prompt('enter a number')
console.log(`${b} is prime? ${isPrime2(b)}`)