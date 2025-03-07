import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";

import List from "../../furnitures/list/List";
import NewFurniture from "../../furnitures/new/New";


export default function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/furniture"/>} />
            {/* <Route path="/" element={<Profile />} /> */}
            <Route path="/furniture" element={<List />} />
            <Route path="/furniture/new" element={<NewFurniture />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )   
}