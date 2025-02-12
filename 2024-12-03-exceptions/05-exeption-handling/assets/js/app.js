const numberOfDigits = +prompt('enter number of digits')

console('hello1')

try {
const pi = Math.PI.toFixed(numberOfDigits)
console.log(pi)
} catch (e) {
    console.log(e.message)
    if(e.message.includes('between 0 and 100')) alert('please enter a number between 0 and 100')
} finally {
    console.log('dealt with toFixed for better and worse')
}

console('hello2')
