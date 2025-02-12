function printArray(message, amount) {
    for(i=1; i<=amount; i++) {
        document.write(`${message} |`)
    }
}

printArray('You have to read!', 6); 
document.write(`<br>`)


    let think = prompt(`please enter what are you thinking about`)
    let num = +prompt(`please enter the amount of times you wish to see your think`)

    printArray(think, num)


// for (i=1; i<=10; i++) {
//     printArray()
// }
