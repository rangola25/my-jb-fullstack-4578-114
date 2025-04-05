import NotFound from "../not-found/NotFound";
import EditVacation from "../../vacations/edit/Edit";
import Cards from "../../vacations/cards/Cards";
import New from "../../vacations/new/New";
import { Routes, Route, Navigate } from 'react-router-dom';
import GraphReport from "../../vacations/report/Report";

export default function Routing(): JSX.Element {
    const isAdmin = localStorage.getItem('isAdmin') === 'true'; 

    return (

        
        <Routes>
            {isAdmin && (
                <>
                    <Route path="/" element={<Navigate to="/admin/vacations"/>} />
                    <Route path="/admin/vacations" element={<Cards />} />
                    <Route path="/admin/new" element={<New />} />
                    <Route path="/admin/edit/:id/" element={<EditVacation />} />
                    <Route path="/admin/report" element={<GraphReport />} />
                </>
            )}

            {!isAdmin && (
                <>
                    <Route path="/" element={<Navigate to="/vacations"/>}  />
                    <Route path="/vacations" element={<Cards />} />
                </>
            )}

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
