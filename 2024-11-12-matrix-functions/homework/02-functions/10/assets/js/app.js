let fhibo = [1,1,2,3,5,8,13];
let average = 0;
let sum = 0;
function printArray(fhibo) {
    for (let cell of fhibo) {
        sum = sum + cell;
    }
    average = (sum)/fhibo.length
    document.write(average)
};

printArray(fhibo);
document.write(`<br>`);

let rand = []; 
for (i=1; i<=10; i++) {
    rand.push(parseInt(Math.random() * (101)))
}
printArray(rand);

