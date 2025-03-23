import { useContext, useMemo } from "react";
import { AuthContext } from "../components/auth/auth/Auth";
import User from "../models/user/User";
import { jwtDecode } from "jwt-decode";

export default  function userUserId() {
    const authContext = useContext(AuthContext)
    let id = null
    if(authContext) {
        const { jwt } = authContext

        const id = useMemo(() => {
            const { id } = jwtDecode<User>(jwt)
            return id
        }, [ jwt ])
    }
}