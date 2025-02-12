function getN(numbersArray) {
   let min = numbersArray[0];
   for (const number of numbersArray) {
      min = min < number ? min : number;
   }
   console.log(`min of [${numbersArray}] is ${min}`); 
}

getN([1, 2, 3]);
getN([79, 41, 30, 213]);
getN([101, 202, 33]);
