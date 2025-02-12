export default class ArrayOperations {  

    static getSum(arr: number[]): number {
        return arr.reduce((acc, curr) => acc + curr, 0);
      }    

      static getAvg(arr: number[]): number {
        return this.getSum(arr) / arr.length;
      }

    static getMax (arr: number[]): number {
        return arr.reduce((acc, curr) => acc > curr ? acc : curr, 0);
    }

    static getMin (arr: number[]): number {
        return arr.reduce((acc, curr) => acc < curr ? acc : curr, 102);
    }
    
}