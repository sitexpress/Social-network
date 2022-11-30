import React from 'react'
import {MessageDataType} from "../../../Redux/state";

type messageDataType = {
    messageData: MessageDataType[]
}

export const MessageItems = (props:messageDataType) => {
    let messageElements = props.messageData.map(el => <span key={el.id}>{el.message}</span>)
    return (
        <div>
            {messageElements}
        </div>
    )
}