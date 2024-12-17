"use strict";

(() => {

    const backgroundP = (callBack) => {
        document.getElementById(callBack).addEventListener('click', function() {
            setTimeout(() => {
                changeBackgroundColor.call(this); 
            }, 1000);
        });


        function changeBackgroundColor() {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            this.style.backgroundColor = randomColor;
        }
    };


    backgroundP('1');
    backgroundP('2');
    backgroundP('3');
    backgroundP('4');
    backgroundP('5');

})();


