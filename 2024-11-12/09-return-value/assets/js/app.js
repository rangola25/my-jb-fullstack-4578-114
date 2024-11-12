function getN(numbersArray) {
   let max = 0; 
   for (const number of numbersArray) {
      max = max > number ? max : number; // מציאת הערך המקסימלי
   }
   console.log(`max of [${numbersArray}] is ${max}`); // הדפסת הערך המקסימלי
   return max; // החזרת הערך המקסימלי
}

// קריאה לפונקציה עם מערך של מספרים
getN([1, 2, 3]);
