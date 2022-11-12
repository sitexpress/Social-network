import React from "react";
import companyLogo from "../../img/logo/logo1200.png";
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.header__logo} src={companyLogo} alt="logo"/>
            <h1 className={s.header__heading}>Social network</h1>
        </header>
    )
}
