import Author from "../author/Author";

export default interface Draft extends Author {
    name: string,
    authorId: string,
    amountOfPages: number,
    price: number
}