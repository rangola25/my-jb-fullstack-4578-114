"use strict";

(async () => {

   const getNumberOfCandles = (dayNumber) => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(dayNumber < 1) reject('dayNumber must be greater than 0')
            if(dayNumber > 8) reject('no Isru Chag in hanukah')
                resolve(dayNumber + 1)
            }, 10)
        })
   }

    let result;
    let result2

    console.log('A')
    console.log(result)
    console.log(result2)
    
    result = await getNumberOfCandles(1)
    console.log('B')
    console.log(result)
    console.log(result2)

    result2 = await getNumberOfCandles(2)
    console.log('C')
    console.log(result)
    console.log(result2)

})()

