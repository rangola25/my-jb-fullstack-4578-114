"use strict";

(() => {

    function getGradesFromServer(callback) {
        setTimeout(() => {
      // Demo for getting grades from the server:
            const grades = [100, 98, 75, 80, 100, 87];
            // "Return" that array to the calling code.
            callback(grades)
        }, 7000);
    }

    const show = (grades) => {
         console.log(`The grades are: ${grades}`);
        };
        getGradesFromServer(show);
    
})()



    


