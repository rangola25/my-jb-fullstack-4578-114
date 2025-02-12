// 3.1
const phoneNumber = prompt('Please enter a phone number');
// phoneNumber = phoneNumber.trim();
let isPhoneNumber = true;

if (!phoneNumber.length === 10) {
  isPhoneNumber = false
} else if (!phoneNumber.startsWith('05')) {
  isPhoneNumber = false
} else  if (typeof +phoneNumber !== 'number') {
  isPhoneNumber = false
}


//     for(const char of phoneNumber) {
//       if(isNaN(+char)) {
//         isPhoneNumber = false
//         break
//       }
//     }
// }
// } else if (isNaN(+phoneNumber)) {
//   isPhoneNumber = false
// } 

document.write(`${phoneNumber} is ${isPhoneNumber ? '' : 'not'} a phone number`);


// 3.2
// if (phoneNumber.startsWith('05') && phoneNumber.length === 10 &&  !isNaN(phoneNumber)) 
// {
//   document.write(`${phoneNumber} is a valid Israeli phone number`);
// } 
// else 
// {
//   document.write(`${phoneNumber} is a non-valid Israeli phone number`);
// }





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