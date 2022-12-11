import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./Redux/state";

type AppPropsType = {state:StateType }

export function App(props1:AppPropsType) {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Navbar/>
              <div className="App__mainPage">
                  <Route exact path='/dialogs' render={() => <Dialogs dialogData={props1.state.dialogsPage.dialogData} messageData={props1.state.dialogsPage.messageData}/>}/>
                  <Route path='/profile' render={() => <Profile profilePage={props1.state.profilePage}/>}/>
              </div>
              <Footer/>
          </div>
      </BrowserRouter>

  );
}

