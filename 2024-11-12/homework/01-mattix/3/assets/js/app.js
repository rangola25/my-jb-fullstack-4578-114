const products = [
    ["Onion", "Carrot", "Tomato", "Cucumber"],
    ["Apple", "Banana", "Peach", "Grapes", "Orange"],
    ["Wheat", "Flour"]
   ];
   
   for(const row of products) {
    for (const cell of row) {
        document.write(`${cell} | `)  
    }
    document.write("<br>")
}

document.write("<br>")

let amountOfLetters = 0;
let longest = products[0][0].length;
let shortest = products[0][0].length;
 
for(const row of products) {
    for (const cell of row) {
        amountOfLetters = cell.length;
        longest = longest > amountOfLetters ? longest : amountOfLetters;
        shortest = shortest < amountOfLetters ? shortest : amountOfLetters;
    }
}

for(const row of products) {
    for (const cell of row) {
    if (cell.length === shortest) {
            document.write(`${cell} | `)
        }
    }
}

document.write("<br>")
document.write("<br>")

for(const row of products) {
    for (const cell of row) {
        if (cell.length === longest) {
        document.write(cell)
        }
    }
}



// const matrix = []

// let bigger = 1;
// let X = 1;

// for(let rowCount=0; rowCount<10; rowCount++) {
//     const row = []
//     for(let colCount=0; colCount<10; colCount++){
//         row.push(bigger)
//         bigger += X;
//     }
//     X += 1;
//     bigger = X;
//     matrix.push(row)
// }

// let sum = 0;



// document.write(`${sum}`)