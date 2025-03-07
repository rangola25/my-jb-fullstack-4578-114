import Type from "../type/Type";

export default interface  Draft extends Type {
    presentName: string,
    targetCode: string,
    presentDescription: string,
    price: number,
    discount: number
}