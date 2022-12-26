import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";
import {DialogItems} from "./DialogItems/DialogItems";
import {MessageItems} from "./MessageItems/MessageItems";
import {DialogDataType, dialogsPageType, MainActionType, MessageDataType} from "../../Redux/state";

type DialogData = {
    dialogData: DialogDataType[]
    dialogsPage: dialogsPageType
    dispatch: (actions: MainActionType) => void
}

export const Dialogs = (props:DialogData) => {

    return (
        <div className={s.dialogs}>
            <div>
                <ul>
                    <DialogItems dialogData={props.dialogData}/>
                </ul>
            </div>
            <div>
                <ul>
                    <MessageItems dialogsPage={props.dialogsPage}
                                    dispatch={props.dispatch}
                    />
                </ul>
            </div>
        </div>
    )
}