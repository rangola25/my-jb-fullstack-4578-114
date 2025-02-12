function printArray(arr) {
    for(let cell of arr) {
        document.write(`${cell} |`)
    }
}

printArray([2, 4, 6, 10, 16]); 
document.write(`<br>`)

let numbers = [];
for (i=1; i<=6; i++){
    let num = +prompt(`please enter a cell number`)
    numbers.push(num)
}

 function printLongArray(){
 printArray(numbers)
 }

 printLongArray()

// for (i=1; i<=10; i++) {
//     printArray()
// }
