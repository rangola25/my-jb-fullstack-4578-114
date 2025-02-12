let matrix = []

for(let rowCount=0; rowCount<5; rowCount++) {
    const row = []
    for(let colCount=0; colCount<5; colCount++){
        const randomNumber = parseInt(Math.random() * 100)
        row.push(randomNumber)
    }
    matrix.push(row)
}

console.log(matrix)

let max = 0
for (const row of matrix) {
    for(const cell of row) {
        max = cell > max ? cell : max
    }
}

console.log(`max value is ${max}`)




let maxRow = 0
let maxCol = 0
max = 0
for (let row=0; row<matrix.length; row++) {
    for(let col=0; col<matrix[row].length; col++) {
        if (matrix[row][col]>max) {
            max=matrix[row][col]
            maxRow=row
            maxCol=col
        }
    }
}

console.log(`max value is ${max}, located at [${maxRow}][${maxCol}]`)