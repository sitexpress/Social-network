import React from 'react'
import {MessageDataMainType} from "../../../index";

type messageDataType = {
    messageData: MessageDataMainType
}

export const MessageItems = (props:messageDataType) => {
    let messageElements = props.messageData.map(el => <span key={el.id}>{el.message}</span>)
    return (
        <div>
            {messageElements}
        </div>
    )
}