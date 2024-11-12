const matrix = [
    [1,2,3],
    [11,12,13],
    [7,8,9]
]

document.write(matrix[1][2])
document.write("<hr>")

document.write(matrix[2][1])
document.write("<hr>")

let sum = 0
let count = 0

for(const row of matrix) {
    for (const cell of row) {
        document.write(`${cell} | `)
        sum += cell
        count += 1
    }
    document.write("<br>")
}

document.write(`${sum} | `)
document.write(`${count} | `)