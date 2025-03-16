import Draft from "./Draft";

export default interface Vacation extends Draft {
    id: string,
    createdAt: Date,
    updatedAt: Date
}