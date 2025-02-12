let fhibo = [1,1,2,3,5,8,13] 

function printArray(fhibo) {
 document.write(fhibo)
};

printArray(fhibo);
document.write(`<br>`);

let rand = []; 
for (i=1; i<=10; i++) {
    rand.push(parseInt(Math.random() * (101)))
}
printArray(rand);

