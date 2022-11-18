import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";



type DialogItemType = {
    name: string
    id: number
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
    return (
        <div className={s.dialogs}>
            <div>
                <ul>
                    <DialogItem name="Alex" id={1}/>
                    <DialogItem name="MAx" id={2}/>
                    <DialogItem name="Mad" id={3}/>
                    <DialogItem name="John" id={4}/>
                    <DialogItem name="Goerge" id={5}/>
                    <DialogItem name="Winx" id={6}/>
                </ul>
            </div>
            <div className={s.dialogs__dialog}>
                <Message message={'Bar'}/>
                <Message message={'Foo'}/>
                <Message message={'How are you'}/>
            </div>
        </div>
    )
}