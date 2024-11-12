// 4
let password = prompt('Please enter new password');
password = password.trim();


if (/[^\w\s]/.test(password) && password.length >= 6 && /\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {
  document.write('A strong password <br>');
} else {} 

if (/[^\w\s]/.test(password)) {}
else {document.write('Missing a special letter <br>');}

if (password.length >= 6) {}
else {document.write('less than 6 letters <br>');}

if (/[a-z]/.test(password)) {}
else {document.write('There is no lowercase letter <br>');}

if (/\d/.test(password)) {}
else {document.write('Numberless <br>');}

if (/[A-Z]/.test(password)) {}
else {document.write('No capital letter <br>');}


// // string is an array of characters
// const message = "hello world" // ['h','e','l','l','o',' ','w'...]
// console.log(message)

// // I can see the character at offset 0
// console.log(message[0])

// // I can see the character at offset 0
// console.log(message[2])

// // with strings, i can't modify singular characters 
// message[0] = 'l';
// console.log(message)

// console.log(message.toUpperCase())

// const upperCaseMessage = 'HI, HOW ARE YOU?'
// console.log(upperCaseMessage.toLowerCase())
// console.log(upperCaseMessage.toLowerCase)

// // JavaScript is case sensitive
// // meaning, HELLO !== hello
// const text = 'Hello world'
// console.log(text.includes('hello'))
// console.log(text.startsWith('hello'))
// console.log(text.startsWith('Hello'))
// console.log(text.endsWith('Hello'))
// console.log(text.endsWith('ld'))
// console.log(text.endsWith('rld'))

// const anotherMessage = '  hello     '
// console.log(anotherMessage.length)
// // trim removes blank spaces from the beginning and the end
// // but, not in the middle
// console.log(anotherMessage.trim().length)
// console.log(message.trim())

// console.log(message.indexOf('o w'))
// console.log(message.indexOf('l'))
// console.log(message.lastIndexOf('l'))
// console.log(message.lastIndexOf('orl'))

// const longMessage = 'Welcome to Jamaica man, we can have a lot of fun'
// console.log(longMessage.substring(11, 18))
// console.log(longMessage.substring(25))



// // let end = longMessage.indexOf(' man, we')


// console.log(longMessage.substring(start, end)) // => Jamaica

// const firstWordEnd = sentence.indexOf(' ')
// const firstWord = sentence.substring(0, firstWordEnd)
// console.log(firstWord)

// const lastWordStart = sentence.lastIndexOf(' ') + 1
// const lastWord = sentence.substring(lastWordStart)
// console.log(lastWord)

// console.log(`${firstWord} ${lastWord}`)