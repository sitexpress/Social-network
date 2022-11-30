import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {state} from './Redux/state'

export const AppReRender = () => {
    ReactDOM.render(
        <App state={state}/>,
        document.getElementById('root')
    )
}










