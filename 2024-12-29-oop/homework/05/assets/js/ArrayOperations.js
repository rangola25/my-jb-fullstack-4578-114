export default class ArrayOperations {
    static getSum(arr) {
        return arr.reduce((acc, curr) => acc + curr, 0);
    }
    static getAvg(arr) {
        return this.getSum(arr) / arr.length;
    }
    static getMax(arr) {
        return arr.reduce((acc, curr) => acc > curr ? acc : curr, 0);
    }
    static getMin(arr) {
        return arr.reduce((acc, curr) => acc < curr ? acc : curr, 102);
    }
}
