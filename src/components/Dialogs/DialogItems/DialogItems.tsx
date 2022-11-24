import React from 'react'
import {NavLink} from "react-router-dom";
import {DialogDataMainType} from "../Dialogs";

type DialogType = {
    dialogData: DialogDataMainType
}

export const DialogItems = (props:DialogType) => {

    let dialogElements = props.dialogData.map(el => {
        return (
            <NavLink to={`/dialogs/1` + el.id} key={el.id}>
                <li><a href={`/dialogs/1` + el.id}>{el.name}</a></li>
            </NavLink>
        )
    })
    return (
        // <NavLink to={`/dialogs/1` + props.id}>
        //     <li><a href={`/dialogs/1` + props.id}>{props.name}</a></li>
        // </NavLink>
    <div>
        {dialogElements}

    </div>
    )
}