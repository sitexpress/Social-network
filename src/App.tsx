import React from 'react';
import './App.css';
import companyLogo from './img/logo/logo1200.png';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";

export function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        <Profile/>
        <Footer/>
    </div>
  );
}

