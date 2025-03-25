import Login from "./Login"
import SignUp from "./SignUp"

export default interface User extends Login, SignUp {
    id: string,
    createdAt: string,
    updatedAt: string
}