import { Draft } from "./draft.model";

export interface Furniture extends Draft {
    type: string,
    size: string,
    color: string,
    price: number
}
