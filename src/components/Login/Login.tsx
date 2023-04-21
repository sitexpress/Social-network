import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import { Input } from "../../common/FormsControls/FormsControls"
import s from "./Login.module.css"
import {maxLengthCreator, required} from "../../utils/validators/validators";

type LoginFormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const maxLength15 = maxLengthCreator(15)

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = ({...props}) => {

    return <div className={s.login_container}>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       name={"login"}
                       component={Input}
                       validate={[required, maxLength15]}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       component={Input}
                       validate={[required, maxLength15]}
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

export const Login = () => {
    const onSubmit = (formData:LoginFormDataType) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
