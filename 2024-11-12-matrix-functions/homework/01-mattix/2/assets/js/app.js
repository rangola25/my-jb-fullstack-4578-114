const matrix = []

let bigger = 1;
let X = 1;

for(let rowCount=0; rowCount<10; rowCount++) {
    const row = []
    for(let colCount=0; colCount<10; colCount++){
        row.push(bigger)
        bigger += X;
    }
    X += 1;
    bigger = X;
    matrix.push(row)
}

let sum = 0;

for(const row of matrix) {
    for (const cell of row) {
        document.write(`${cell} | `)  
        sum += cell;  
    }
    document.write("<br>")
}

document.write(`${sum}`)