import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainActionType, StateType, store, StoreType} from "./Redux/state";
import {MessageItems} from "./components/Dialogs/MessageItems/MessageItems";

type AppPropsType = {
    state: StateType
    // profilePostData: (value: string) => void
    // newPostDataChangeHandler: (value: string) => void
    dispatch: (actions: MainActionType) => void
}

export function App(props: AppPropsType) {
    return (
        <div className="App">
                    <Header/>
                    <Navbar/>
                <div className="App__mainPage">
                <Routes>

                        <Route path='/dialogs' element={<Dialogs
                            dialogData={props.state.dialogsPage.dialogData}
                            dialogsPage={props.state.dialogsPage}
                            dispatch={props.dispatch}/>}
                        />

                        <Route path='/profile' element={<Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                            // profilePostData={props.profilePostData}
                            // newPostDataChangeHandler={props.newPostDataChangeHandler}
                        />}
                        />
                    </Routes>
                </div>
            <Footer/>
        </div>
    );
}

