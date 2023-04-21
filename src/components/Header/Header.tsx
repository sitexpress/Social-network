import React from "react";
import companyLogo from "../../assets/logo1200.png";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type AuthType = {
    id: string
    email: string
    login: string
    isAuth: boolean
    getLogin: () => void
    logout: () => void
}

export const Header = (props:AuthType) => {
    return (
        <header className={s.header}>
            <img className={s.header__logo} src={companyLogo} alt="logo"/>
            <h1 className={s.header__heading}>Social network</h1>
            <div className={s.login}>
                {props.isAuth
                    ?
                    <div>
                        <span>email:{props.login} <br/></span>
                        <span>id:{props.id}</span>
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    :
                    <NavLink to={"/login"}>Login</NavLink>
                }

            </div>
        </header>
    )
}
