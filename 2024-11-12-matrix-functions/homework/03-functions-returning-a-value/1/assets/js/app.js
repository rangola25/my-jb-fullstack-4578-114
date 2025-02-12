function getN(numbersArray) {
   let average = 0;
   let sum = 0;
   for (const number of numbersArray) {
      sum = sum + number;
      average = sum/numbersArray.length
   }
   console.log(`average of [${numbersArray}] is ${average}`); // הדפסת הערך המקסימלי
}

getN([1, 2, 3]);
getN([79, 41, 30]);
getN([101, 202, 33]);
