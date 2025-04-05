import Basic from "./Basic";

export default interface Vacation extends Basic {
    // status: string;
    id: string,
    createdAt: Date,
    updatedAt: Date,
    file: string
}