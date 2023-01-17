import React, {ChangeEvent} from 'react'
import {dialogsPageType} from "../../../Redux/messageReducer";
import {addMessagesAC, newMessageDataAC} from "../../../Redux/messageReducer";
import {MapConnectMessageType} from "../MessageItemsContainer/MessageItemsContainer";

// type messagesDataType = {
//     dialogsPage: dialogsPageType
//     callBackOnSendMessage: () => void
//     callBackOnChangeMessage: (value:string) => void
// }

// type messagesDataType = MapStatePropsType | MapDispatchToPropsType

export const MessageItems = (props:MapConnectMessageType) => {

    const sendMessageHandler = () => {
        props.callBackOnSendMessage()
    }

    const onChangeMessageHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.callBackOnChangeMessage(e.currentTarget.value)
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