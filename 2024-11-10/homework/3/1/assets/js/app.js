// 1.1
// let websiteAddress = prompt('Please enter a website address');
// websiteAddress = websiteAddress.trim();

// // בדוק אם הכתובת מסתיימת ב-'.com' או ב-'.co.il'
// if (websiteAddress.endsWith('.com')) {
//   document.write('The website ends with .com');
// } else if (websiteAddress.endsWith('.co.il')) {
//   document.write('The website ends with .co.il');
// } else {
//   document.write('The website does not end with .com or .co.il');
// }

// 1.2
const websiteAddress = prompt('Please enter a website address');
websiteAddress = websiteAddress.trim();

// בדוק אם הכתובת מסתיימת ב-'.com' או ב-'.co.il'
if (websiteAddress.endsWith('.com')) {
  document.write('This is International commercial site ends with .com');
} else if (websiteAddress.endsWith('.co.il')) {
  document.write('This is Israeli commercial ends with .co.il');
} else if (websiteAddress.endsWith('.org')) {
  document.write('This is International corporate website ends with .org');
} else if (websiteAddress.endsWith('.org.il')) {
    document.write('This is Israeli corporate website ends with .org.il');
} else if (websiteAddress.endsWith('.gov.il')) {
    document.write('This is Israeli government website ends with .gov.il');
} else  {
    document.write('This is other website');
}

// const indexOfFirstDot = websiteAddress.indexOf('.')
// const suffix = websiteAddress.substring(indexOfFirstDot)

// document.write(suffix)



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