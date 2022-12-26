import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <NavLink className={s.nav__link}  to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink className={s.nav__link}  to="/dialogs">Messages</NavLink>
                </li>
                <li>
                    <NavLink className={s.nav__link}  to="/news">News</NavLink>
                </li>
                <li>
                    <NavLink className={s.nav__link}  to="/music">Music</NavLink>
                </li>
                <br/>
                <li>
                    <NavLink className={s.nav__link}  to="/settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}