"use strict";

(async () => {

   const getNumberOfCandles = (dayNumber) => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(dayNumber < 1) reject('dayNumber must be greater than 0')
            if(dayNumber > 8) reject('no Isru Chag in hanukah')
                resolve(dayNumber + 1)
            }, 2000)
        })
   }

   try{
    const promises = [1,2,3,4,5,6,7,8].map(dayNumber => getNumberOfCandles(dayNumber))
    //console.log(promises)
    const results = await Promise.all(promises)
    console.log(results)
    const candlesINHanukah = results.reduce((cumulative, current) => cumulative + current, 0)
    console.log(candlesINHanukah)
   } catch(e){
    console.log(e)
   }

})()

