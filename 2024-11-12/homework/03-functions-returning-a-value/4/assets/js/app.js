function getN(...numbersArray) {
   let help = 0;
   let arr = [];
   for (let row of numbersArray) {
      let counter = row.length;
      if(help < counter) {
         arr = row;
         help = counter;
      } 
   }
   console.log(`The longest array is [${arr}]`); 
   return arr;
}

getN([1, 2, 3], [794, 8, 21, 9], [2, 5], [1, 2]);
getN([79, 41, 30, 213], [81, `ran`, 21, `miss`, 7, 7], [2, 5, 1]);
getN([101, 202, 33], [81, `ball`, 21, `shot`, 7, 7], [2, 5, 1]);
