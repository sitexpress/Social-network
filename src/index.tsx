import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {StateType, store} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

export const AppReRender = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                // profilePostData={store.dispatch.bind(store)}
                // newPostDataChangeHandler={store.newPostDataChangeHandler.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

store.subscriber(AppReRender)
AppReRender(store.getState())






