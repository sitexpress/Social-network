import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../Redux/authReducer";
import {Dispatch} from "redux";
import {ReduxStateType} from "../../Redux/redux-store";

type AuthType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<AuthType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    let {id, email, login} = resp.data.data
                    this.props.setAuth(id, email, login)
                }
            })
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
    setAuth: (id: string, email: string, login: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setAuth: (id: string, email: string, login: string) => {
            dispatch(setAuthUserDataAC(id, email, login))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
