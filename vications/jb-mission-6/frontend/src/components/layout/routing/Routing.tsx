import { Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import EditVacation from "../../vacations/edit/Edit";
import Cards from "../../vacations/cards/Cards";
import New from "../../vacations/new/New";
// import Login from "../../auth/login/Login";

export default function Routing(): JSX.Element {
    return (
        <Routes>
            {/* <Route path="/auth/login" element={<Login/>} /> */}

            {/* <Route path="/" element={<Navigate to="/vacations"/>} /> */}

            <Route path="/vacations" element={<Cards isAllowActions={false}/>} />
            <Route path="/admin/vacations" element={<Cards isAllowActions={true} />} />
            <Route path="/admin/new" element={<New />} />
            <Route path="/admin/edit/:id/" element={<EditVacation />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )   
}
