import { Route, Routes } from "react-router-dom";
import Login from "../../auth/login/Login";

export default function RoutingLogin(): JSX.Element {
    return (
        <Routes>
            <Route path="*" element={<Login />} />
        </Routes>
    )   
}
