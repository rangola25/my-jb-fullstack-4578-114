import { Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import Login from "../../auth/login/Login";

export default function RoutingLogin(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/auth/signup" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )   
}
