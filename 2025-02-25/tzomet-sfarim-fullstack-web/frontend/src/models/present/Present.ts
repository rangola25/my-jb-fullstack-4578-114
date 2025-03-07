import Draft from "./Draft";

export default interface Present extends Draft {
    code: string,
    createdAt: string,
    updatedAt: string
}