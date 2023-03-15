import React, {ComponentType} from 'react';
import { Navigate } from 'react-router-dom';

import {MessageItems} from "../components/Dialogs/MessageItems/MessageItems";
import {MapConnectMessageType} from "../components/Dialogs/MessageItemsContainer/MessageItemsContainer";
import {connect} from "react-redux";
import {ReduxStateType} from "../Redux/redux-store";


type MSTP = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: ReduxStateType): MSTP => ({
    isAuth: state.auth.isAuth
})

export function WithAuthRedirect <T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MSTP) {
        let {isAuth, ...restProps} = props

        if(!isAuth) return <Navigate to={"/login"}/>
        return <Component {...restProps as T}/>
        }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
    // class RedirectComponent extends React.Component<MapConnectMessageType> {
    //     render() {
    //         if(!this.props.isAuth) return <Navigate to={"/login"}/>
    //         return <Component {...props}/>
    //     }
    // }
    // return RedirectComponent


