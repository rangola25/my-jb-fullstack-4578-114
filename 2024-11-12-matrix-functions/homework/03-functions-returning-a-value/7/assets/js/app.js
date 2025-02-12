function findMaxMatrix(arr) {

   if (arr.length === 0) return -1;

  let maxValue = arr[0][0];

  for(let row of arr) {
      for (let i = 0; i < row.length; i++) {
         if (row[i] > maxValue) {
           maxValue = row[i];     
       }
    }
  }
 return maxValue
}

let array1 = [[12,23,34,45],[56,67,78,89],[10,20,30,40]];
let array2 = [[1,3,3,5],[6,7,8,9],[11,22,33,44]];
let array3 = [[3,5,8,9],[4,5,7,8],[7,7,8,10],[5,5,5,5]];

console.log(findMaxMatrix(array1)); 
console.log(findMaxMatrix(array2)); 
console.log(findMaxMatrix(array3)); 
