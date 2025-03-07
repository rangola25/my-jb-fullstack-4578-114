import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import Home from "../../posts/home/Home";
import Gifts from "../../posts/gifts/Gifts";
import NewGift from "../../posts/new/New";

export default function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>} />
            {/* <Route path="/" element={<Profile />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/new" element={<NewGift />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )   
}
