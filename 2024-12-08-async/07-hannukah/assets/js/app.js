"use strict";

(() => {

   const getNumberOfCandles = (dayNumber, successCallback, errorCallback) => {
        setTimeout(() => {
            if(dayNumber < 1) errorCallback('dayNumber must be greater than 0')
            if(dayNumber > 8) errorCallback('no Isru Chag in hanukah')
                successCallback(dayNumber + 1)
        }, 3000)
   }

   getNumberOfCandles(1, result => {
    console.log(result)
   }, console.log)

})()

