import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";
import {DialogItems} from "./DialogItems/DialogItems";
import {MessageItems} from "./MessageItems/MessageItems";


export type DialogDataMainType = Array<DialogDataType>

export type DialogDataType = {
    id: string
    name: string
}

export type MessageDataMainType = Array<MessageDataType>

export type MessageDataType = {
    id: string
    message: string
}

export const Dialogs = () => {

    let dialogData = [
        {id: v1(), name:"Alex", },
        {id: v1(), name:"Margo", },
        {id: v1(), name:"Sko", },
        {id: v1(), name:"Mako", },
        {id: v1(), name:"George", },
        {id: v1(), name:"Max", },
    ]

    let messageData = [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hi'},

    ]

    return (
        <div className={s.dialogs}>
            <div>
                <ul>
                    <DialogItems dialogData={dialogData}/>
                </ul>
            </div>
            <div className={s.dialogs__dialog}>
                <MessageItems messageData={messageData}/>
            </div>
        </div>
    )
}