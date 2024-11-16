function findMinIndex(arr) {

   if (arr.length === 0) return -1;

  let minIndex = 0; 
  let minValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
   if (arr[i] < minValue) {
     minValue = arr[i];  
     minIndex = i;       
   }
 }
 return minIndex
}

let array1 = [3, 5, 1, 2, 4];
let array2 = [10, 5, 2, 5, 3, 1];
let array3 = [7, 8, 6, 7, 5, 3, 5];

console.log(findMinIndex(array1)); 
console.log(findMinIndex(array2)); 
console.log(findMinIndex(array3)); 
