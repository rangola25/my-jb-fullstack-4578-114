function getReversed (num) {
   if(typeof num !== 'string') return

   let result = ''
   for(let i=num.length-1; i>=0; i--) {
      result += num[i]

   }

return result

}

function isPalindrom(num) {
   return num === getReversed(num)
}

console.log(getReversed('Rango'))

console.log(isPalindrom('abba'))
console.log(isPalindrom('Ran'))