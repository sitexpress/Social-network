import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";

type DialogItemType = {
    name: string
    id: string
}

type MessageType = {
    message: string
}

const DialogItem:React.FC<DialogItemType> = (props) => {
    return (
        <NavLink to={`/dialogs/1` + props.id}>
            <li><a href={`/dialogs/1` + props.id}>{props.name}</a></li>
        </NavLink>
    )
}

const Message:React.FC<MessageType> = (props) => {
    return (
        <div>{props.message}</div>
    )
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

    let dialogElements = dialogData.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    let messageElements = messageData.map(el => <Message key={el.id} message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div>
                <ul>
                    {dialogElements}
                </ul>
            </div>
            <div className={s.dialogs__dialog}>
                {messageElements}
            </div>
        </div>
    )
}