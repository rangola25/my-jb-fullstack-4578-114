import { NavLink } from "react-router-dom";

export default function CategoriesRouting(): JSX.Element {
    return (
        // <Routes>
            <nav className='nav'>
            <NavLink to="/categories/1">Beverages</NavLink>
            <NavLink to="/categories/2">Condiments</NavLink>
            <NavLink to="/categories/3">Confections</NavLink>
            <NavLink to="/categories/4">Dairy Products</NavLink>
            <NavLink to="/categories/5">Grains/Cereals</NavLink>
            <NavLink to="/categories/6">Meat/Poultry</NavLink>
            <NavLink to="/categories/7">Produce</NavLink>
            </nav>
        // </Routes>
    )   
}
