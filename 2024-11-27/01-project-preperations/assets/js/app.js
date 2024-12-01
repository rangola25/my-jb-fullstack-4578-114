function findMax(numbers) {
    let big = numbers[0];
    for(const number of numbers) {
        big = big > number ? big : number;
    }
    return big
}

const numbers = [1, 5, 9, 7] 
console.log(findMax(numbers))
