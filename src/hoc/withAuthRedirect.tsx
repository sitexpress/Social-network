import React, {ComponentType} from 'react';
import { Redirect } from 'react-router-dom';
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

        if(!isAuth) return <Redirect to={"/login"}/>
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


