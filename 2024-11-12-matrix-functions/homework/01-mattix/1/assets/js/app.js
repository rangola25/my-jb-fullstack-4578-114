const matrix = [
    [12,23,34,45],
    [56,67,78,89],
    [10,20,30,40]
]

let sum = 0;
let count = 0;
let max = 0;
let min = matrix[0][0];

for(const row of matrix) {
    for (const cell of row) {
        document.write(`${cell} | `)
        sum += cell
        count += 1
        max = max > cell ? max : cell;  
        min = min < cell ? min : cell;     
    }
    document.write("<br>")
}

document.write(`The sum of the matrix is ${sum}`) 
document.write("<br>")
document.write(`The average of the matrix is ${sum/count}`)
document.write("<br>")
document.write(`The max number of the matrix is ${max}`)
document.write("<br>")
document.write(`The min number of the matrix is ${min}`)
document.write("<br>")

for(const row of matrix) {
    for (let cell of row) {
        if (cell % 7 === 0) {
        cell = ':)';}
        document.write(`${cell} | `)
    }
    document.write("<br>")
}


// document.write(matrix[1][2])
// document.write("<hr>")

// document.write(matrix[2][1])
// document.write("<hr>")

// let sum = 0
// let count = 0

// for(const row of matrix) {
//     for (const cell of row) {
//         document.write(`${cell} | `)
//         sum += cell
//         count += 1
//     }
//     document.write("<br>")
// }

// document.write(`${sum} | `)
// document.write(`${count} | `)