import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {UsersContainer} from "./components/Users/UsersContainer";

export function App() {
    return (
        <div className="App">
                    <Header/>
                    <Navbar/>
                <div className="App__mainPage">
                <Routes>
                    <Route path='/dialogs' element={<Dialogs
                        />}
                    />

                    <Route path='/profile' element={<Profile
                        />}
                    />
                    <Route path='/users' element={<UsersContainer/>}
                    />
                    </Routes>
                </div>
            <Footer/>
        </div>
    );
}
