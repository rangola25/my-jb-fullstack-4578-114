export default class book{

    public constructor (
        public bookName: string,
        public author: string,
        public publish: string,
        public price: number,
    ) {}

    public display() {
        console.log(`The name of the book is ${this.bookName} by the author ${this.author} with the publish of ${this.publish} cost by ${this.price}`)
    }

    public endPrice() {
        console.log(`The end price is ${this.price * 1.17}`)
    }
    
}