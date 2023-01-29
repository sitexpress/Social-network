import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppActionType, AppDispatch, ReduxStateType} from "../../Redux/redux-store";
import {getLoginMeThunkCreator, setAuthUserDataACType} from "../../Redux/authReducer";

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
}

const mapDispatchToProps = (dispatch: AppDispatch):MapDispatchToPropsType => ({
    getLogin: () => {
       dispatch(getLoginMeThunkCreator())
    }
})

const HeaderContainer =  connect(mapStateToProps, mapDispatchToProps)(HeaderComp)

export default HeaderContainer
