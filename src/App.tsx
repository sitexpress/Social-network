import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileInfoContainer/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

export function App() {
    return (
        <div className="App">
                    <HeaderContainer />
                    <Navbar/>
                <div className="App__mainPage">
                <Routes>
                    <Route path='/dialogs' element={<Dialogs/>}/>
                    <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            <Footer/>
        </div>
    );
}

