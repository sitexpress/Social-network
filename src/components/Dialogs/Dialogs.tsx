import React from 'react';
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogItems/DialogItems";
import {MessageItemsContainer} from "./MessageItemsContainer/MessageItemsContainer";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div>
                <ul>
                    <DialogItems/>
                </ul>
            </div>
            <div>
                <ul>
                    <MessageItemsContainer/>
                </ul>
            </div>
        </div>
    )
}