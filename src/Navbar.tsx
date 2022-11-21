
import {NavLink} from "react-router-dom";

export const Navbar=() => {
    return <div className={'navbar'}>
        < NavLink  to={'/task2'} className={({ isActive }) => (isActive? "item_active" : "item" )}>Microtask#2 (Map)</NavLink>
        < NavLink to={'/task3'} className={({ isActive }) => (isActive? "item_active" : "item" )}>Microtask#3 (Button)</NavLink>
        < NavLink to={'/task4'}  className={({ isActive }) => (isActive? "item_active" : "item" )}>Microtask#4 (Usestate)</NavLink>
        < NavLink to={'/task5'}  className={({ isActive }) => (isActive? "item_active" : "item" )}>Microtask#5 (Filter)</NavLink>
    </div>
}