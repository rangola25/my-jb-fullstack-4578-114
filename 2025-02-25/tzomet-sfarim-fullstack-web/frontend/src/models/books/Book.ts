import Draft from "./Draft";

export default interface Book extends Draft {
    id: string,
    createdAt: string,
    updatedAt: string
}