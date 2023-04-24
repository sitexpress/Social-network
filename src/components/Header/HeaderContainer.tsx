import React, {FC} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppActionType, AppDispatch, ReduxStateType} from "../../Redux/redux-store";
import {getLoginMeThunkCreator, logoutThunkCreator, setAuthUserDataACType} from "../../Redux/authReducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

type AuthType = MapStateToPropsType & MapDispatchToPropsType

class HeaderComp extends React.Component<AuthType> {

    componentDidMount() {
        this.props.getLogin()
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType = {
    id: string
    email: string
    login: string,
    isAuth: boolean
}

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

type MapDispatchToPropsType = {
    getLogin: () => void
    logout: () => void
}

const mapDispatchToProps = (dispatch: AppDispatch):MapDispatchToPropsType => ({
    getLogin: () => {
       dispatch(getLoginMeThunkCreator())
    },
    logout: () => {
        dispatch(logoutThunkCreator())
    }
})

export const HeaderContainer =  connect(mapStateToProps, mapDispatchToProps)(HeaderComp)
