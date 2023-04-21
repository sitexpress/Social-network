import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import { Input } from "../../common/FormsControls/FormsControls"
import s from "./Login.module.css"
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/authReducer";
import {Navigate} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {ReduxStateType} from "../../Redux/redux-store";
import {Route, useNavigate} from 'react-router-dom';


type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const maxLength15 = maxLengthCreator(60)

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {

    return <div className={s.login_container}>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       name={"email"}
                       component={Input}
                       validate={[required, maxLength15]}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       component={Input}
                       validate={[required, maxLength15]}
                       type={'password'}
                />
            </div>
            <div>
                <Field type={"checkbox"}
                       name={"rememberMe"}
                       component={Input}
                       validate={[required]}

                />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)

type PropsType = {
    loginThunkCreator: (email:string, password:string, rememberMe:boolean) => void
    isAuth:boolean
}

export const Login = (props:PropsType) => {

    const onSubmit = (formData:LoginFormDataType) => {
        console.log(formData)
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }

    console.log('Outside',props.isAuth)
    if (props.isAuth) {
         return <Navigate to="/profile"/>
    }

    return <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
}

type MapStateToPropsType = {
    isAuth:boolean
}

const mapStateToProps = (state:ReduxStateType):MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginThunkCreator})(Login)

