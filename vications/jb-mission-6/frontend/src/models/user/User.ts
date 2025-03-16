import Login from "./Login";

export default interface User extends Login {
    id: string,
    firstName: string,
    lastName: string,
    role: string,
    createdAt: Date,
    updatedAt: Date
}