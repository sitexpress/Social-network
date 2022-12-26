import React, {ChangeEvent} from 'react'
import {dialogsPageType, MainActionType} from "../../../Redux/state";
import {addMessagesAC, newMessageDataAC} from "../../../Redux/messageReducer";

type messageDataType = {
    dialogsPage: dialogsPageType
    dispatch: (action:MainActionType) => void
}

export const MessageItems = (props:messageDataType) => {

    // const {dialogsId} = useParams()
    // const messages = props.messageData.filter(el => el.id === dialogsId)

    const sendMessageHandler = () => {
        props.dispatch(addMessagesAC(props.dialogsPage.newMessageData))
    }

    const onChangeMessageHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newMessageDataAC(e.currentTarget.value))
    }
    return (
        <div>
            <div>
                <textarea value={props.dialogsPage.newMessageData} onChange={onChangeMessageHandler}></textarea>
                <button onClick={sendMessageHandler}>Send message</button>
            </div>
            <div>
                {props.dialogsPage.messageData.map(el => <div key={el.id}>{el.message}</div>)}
            </div>
        </div>

    )
}