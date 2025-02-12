function findMaxMatrix(arr) {

   if (arr.length === 0) return -1;

  let sum = 0;
  let average = 0;
  let count = 0;

  for(let row of arr) {
   for(let cell of row) {
            sum = sum + cell
            count++;
            average = sum/count
    }
  }
 return average
}

let array1 = [[12,23,34,45],[56,67,78,89],[10,20,30,40,42]];
let array2 = [[1,3,3,5],[6,7,8,9],[11,22,33,44,17]];
let array3 = [[3,5,8,9],[4,5,7,8],[7,7,8,10],[5,5,5,5]];

console.log(findMaxMatrix(array1)); 
console.log(findMaxMatrix(array2)); 
console.log(findMaxMatrix(array3)); 
