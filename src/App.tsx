import React from 'react';
import './App.css';
import companyLogo from './img/logo/logo1200.png';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

export function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Navbar/>
              <div className="App__mainPage">
                  <Route exact path='/dialogs' component={Dialogs}/>
                  <Route path='/profile' component={Profile}/>
              </div>
              {/*<Profile/>*/}
              <Footer/>
          </div>
      </BrowserRouter>

  );
}

