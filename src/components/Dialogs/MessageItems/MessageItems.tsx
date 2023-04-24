import React, {ChangeEvent} from 'react'
import {MapConnectMessageType} from "../MessageItemsContainer/MessageItemsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "../../Login/Login.module.css";
import { Redirect } from 'react-router-dom';
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

export const MessageItems = (props:MapConnectMessageType) => {

    let addNewMessage = (values:AddMessageFormDateType) => {
        props.callBackOnSendMessage(values.newMessageData)
    }


    if (props.isAuth) return <Redirect to={"/login"}/>

    return  <div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
                <div>
                    {props.dialogsPage.messageData.map(el => <div key={el.id}>{el.message}</div>)}
                </div>
            </div>
}

type AddMessageFormDateType = {
    newMessageData: string
    onSubmit: () => void
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDateType>> = ({...props}) => {

    return <div className={s.login_container}>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name={"newMessageData"}
                       placeholder={"Enter your message here..."}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    </div>
}

const AddMessageFormRedux = reduxForm<AddMessageFormDateType>({form:"dialogAddMessageForm"})(AddMessageForm)