function getAbs (num) {
   console.log(`argument is ${num}`)
   console.log(`boolean result is ${num}`)
   return num > 0 ? num : -num
}

console.log(getAbs)
console.log(getAbs(-3))
console.log(getAbs("Ido"))