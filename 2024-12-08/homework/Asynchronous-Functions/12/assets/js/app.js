"use strict";

(() => {

    function getUserFromServer(callback) {
        setTimeout(() => {
            const user = { firstName: "Moishe", lastName: "Ufnik" }
            callback(user)
        }, 4000);
    }

    const show = (user) => {
         console.log(`The user is: ${user.firstName} ${user.lastName}`);
        };
        getUserFromServer(show);
    
})()



    


