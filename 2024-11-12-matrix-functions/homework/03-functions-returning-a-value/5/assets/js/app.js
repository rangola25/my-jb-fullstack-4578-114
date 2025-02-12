function getN(numbersArray) {
   let average = 0;
   let sum = 0;
   let counter = 0;
   for (let cell of numbersArray) {
      sum = sum + cell;
      average = sum/numbersArray.length;
   }
   for (let cell of numbersArray) {
      if (cell > average) {
         counter++;
      }
   }
   return counter
}

array = [1, 2, 3, 7, 8, 21, 9, 2, 5, 1, 2]
console.log(`${array} The amount of numbers that are greater than the average is ${getN(array)}}`)
array2 = [1, 4, 1, 4, 4, 2, 1, 2, 4, 1, 1]
console.log(`${array2} The amount of numbers that are greater than the average is ${getN(array2)}}`)
array3 = [1, 2, 3, 7, 8, 2, 9, 2, 5, 1, 2, 1, 4, -1, 4]
console.log(`${array3} The amount of numbers that are greater than the average is ${getN(array3)}}`)

