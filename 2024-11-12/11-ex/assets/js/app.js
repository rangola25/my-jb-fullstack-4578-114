function isPositive(num) {
  if (num > 0) {
   return num;
  }
  return -num;
}

const num = -49;
console.log(`${num} absolute value is ${isPositive(num)}`)