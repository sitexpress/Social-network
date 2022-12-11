import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {state, StateType, subscriber} from './Redux/state'

let AppReRender = (state:StateType) => {
    ReactDOM.render(
        <App state={state}/>,
        document.getElementById('root')
    )
}
AppReRender(state)

subscriber(AppReRender)







