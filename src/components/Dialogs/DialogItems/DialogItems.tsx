import React from 'react'
import {NavLink} from "react-router-dom";
import {DialogDataType} from "../../../Redux/state";


type DialogType = {
    dialogData: DialogDataType[]
}

export const DialogItems = (props:DialogType) => {

    let dialogElements = props.dialogData.map(el => {
        return (
            <NavLink to={`/dialogs/${el.id}`} key={el.id}>
                <li>{el.name}</li>
            </NavLink>
        )
    })

    return (
        <div>
            {dialogElements}
        </div>
    )
}