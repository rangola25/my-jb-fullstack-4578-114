import { Draft } from "./draft.model";

export interface Toy extends Draft {
    typeId: string,
    name: string,
    description: string,
    price: number
}
