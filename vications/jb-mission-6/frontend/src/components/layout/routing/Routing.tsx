import NotFound from "../not-found/NotFound";
import EditVacation from "../../vacations/edit/Edit";
import Cards from "../../vacations/cards/Cards";
import New from "../../vacations/new/New";
import { Routes, Route } from 'react-router-dom';

export default function Routing(): JSX.Element {
    const isAdmin = localStorage.getItem('isAdmin') === 'true'; 

    return (
        <Routes>
            {isAdmin && (
                <>
                    <Route path="/admin/vacations" element={<Cards />} />
                    <Route path="/admin/new" element={<New />} />
                    <Route path="/admin/edit/:id/" element={<EditVacation />} />
                </>
            )}

            {!isAdmin && (
                <>
                    <Route path="/vacations" element={<Cards />} />
                </>
            )}

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
