const getAverage = numbers => {
    if (numbers === null) {
        throw new Error("null");
    }
    
    if (numbers === undefined) { 
        throw new Error("undefined");
    }
    // if (typeof numbers !== "object") {
    //     throw new Error("This is not an array")
    // }
    if (!Array.isArray(numbers)) {
        throw new Error("This is not an array");
    }
    if (numbers.length === 0) {
        throw new Error("You have to enter an array")
    }
    const sum = numbers.reduce((acc, current) => (acc += current), 0);
    return sum / numbers.length;
}

const numbers = [];
let isFirstClick = true; 

const firstClick = () => {
    const lengthNumbers = document.getElementById('num').value
    return lengthNumbers
}

const average = () => {

        const length = parseInt(firstClick())  
        console.log(`Array initialized with length ${length}`);
        for(i=0; i<parseInt(firstClick()); i++) {
        numbers.push(+prompt('please enter the array numbers'));
        console.log(`Added ${parseInt(firstClick())} to the array`);
        }

    console.log(getAverage(numbers));

}