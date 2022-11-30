import React from 'react'
import {NavLink} from "react-router-dom";
import {DialogDataType} from "../../../Redux/state";


type DialogType = {
    dialogData: DialogDataType[]
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
        <div>
            {dialogElements}
        </div>
    )
}