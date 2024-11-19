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
