"use strict";

(() => {

    // bad1
   let x = 1
   let y = 2

   x = '1'

   console.log(x+y)

   // bad2
   function sum (a, b) {
    return a + b
   }

    // sum = 'x'

    console.log(sum(2, 3))

})()