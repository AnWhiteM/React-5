import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'


export const Navigation = () =>{

    return(
        
        <nav className={css.navBar}>
            <NavLink to="/" className={css.navLink}>
                Home
            </NavLink>
            <NavLink to="/movie"className={css.navLink}>
                Movie
            </NavLink>
        </nav>
    )

}