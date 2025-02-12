export default class book {
    constructor(bookName, author, publish, price) {
        this.bookName = bookName;
        this.author = author;
        this.publish = publish;
        this.price = price;
    }
    display() {
        console.log(`The name of the book is ${this.bookName} by the author ${this.author} with the publish of ${this.publish} cost by ${this.price}`);
    }
    endPrice() {
        console.log(`The end price is ${this.price * 1.17}`);
    }
}
