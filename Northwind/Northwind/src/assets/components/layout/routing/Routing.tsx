import { Navigate, Route, Routes } from "react-router-dom";
import Products from "../../../products/Products";

export default function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/products"/>} />
            <Route path="/products" element={<Products />} />
        </Routes>
    )   
}
