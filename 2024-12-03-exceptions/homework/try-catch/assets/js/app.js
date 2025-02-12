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
    const sum = numbers.reduce((acc, current) => (acc + current), 0);
    return sum / numbers.length;
}

const numbers = [10, 20, 30];
const average = getAverage(numbers);
console.log(average);
