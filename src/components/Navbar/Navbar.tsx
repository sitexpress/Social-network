import React from "react";
import s from './Navbar.module.css'
export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li>Profile</li>
                <li>Messeges</li>
                <li>News</li>
                <li>Music</li>
                <br/>
                <li>Settings</li>
            </ul>
        </nav>
    )
}