import ArrayOperations from './ArrayOperations.js'

const crazyNumbers: number[] = []

 for(let i = 0; i < 10; i++) {
    crazyNumbers.push(Math.floor((Math.random()) * (101)))
}

console.log( crazyNumbers);
console.log( ArrayOperations.getSum(crazyNumbers));
console.log( ArrayOperations.getAvg(crazyNumbers));
console.log( ArrayOperations.getMax(crazyNumbers));
console.log( ArrayOperations.getMin(crazyNumbers));


