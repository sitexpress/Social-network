import React from "react";
import companyLogo from "../../img/logo/logo1200.png";

export const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={companyLogo} alt="logo"/>
            <h1 className="header__heading">Social network</h1>
        </header>
    )
}
