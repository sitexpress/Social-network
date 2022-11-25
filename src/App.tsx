import React from 'react';
import './App.css';
import companyLogo from './img/logo/logo1200.png';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogDataMainType, MessageDataMainType, PostDataMainType} from "./index";


// type AppType = PostDataType | DialogDataType | MessageDataType
//
// type PostDataType = {
//     postData: PostDataMainType
// }
// type DialogDataType = {
//     dialogData: DialogDataMainType
// }
// type MessageDataType = {
//     messageData: MessageDataMainType
// }

export type DataType = {
    postData: PostDataMainType
    dialogData: DialogDataMainType
    messageData: MessageDataMainType
}

export function App(props:DataType) {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Navbar/>
              <div className="App__mainPage">
                  <Route exact path='/dialogs' render={() => <Dialogs dialogData={props.dialogData} messageData={props.messageData}/>}/>
                  <Route path='/profile' render={() => <Profile postData={props.postData}/>}/>
              </div>
              {/*<Profile/>*/}
              <Footer/>
          </div>
      </BrowserRouter>

  );
}

