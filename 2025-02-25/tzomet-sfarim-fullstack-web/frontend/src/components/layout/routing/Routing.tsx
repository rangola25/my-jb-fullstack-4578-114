import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import Home from "../../books/home/Home";
import List from "../../books/list/List";
import NewBook from "../../books/new/New";

export default function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/books" element={<List />} />
            <Route path="/books/new" element={<NewBook />} />
             {/* <Route path="/books/:name" element={<SearchResults />} /> */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )   
}
