import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";
import {DialogItems} from "./DialogItems/DialogItems";
import {MessageItems} from "./MessageItems/MessageItems";
import {DialogDataType, MessageDataType} from "../../Redux/state";


// export type DialogDataMainType = Array<DialogDataType>
//
// export type DialogDataType = {
//     id: string
//     name: string
// }
//
// export type MessageDataMainType = Array<MessageDataType>
//
// export type MessageDataType = {
//     id: string
//     message: string
// }

type DialogData = {
    dialogData: DialogDataType[]
    messageData: MessageDataType[]
}

export const Dialogs = (props:DialogData) => {

    return (
        <div className={s.dialogs}>
            <div>
                <ul>
                    <DialogItems dialogData={props.dialogData}/>
                </ul>
            </div>
            <div className={s.dialogs__dialog}>
                <MessageItems messageData={props.messageData}/>
            </div>
        </div>
    )
}