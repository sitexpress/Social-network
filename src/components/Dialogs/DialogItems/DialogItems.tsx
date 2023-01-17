import React from 'react'
import {NavLink} from "react-router-dom";
import {store} from "../../../Redux/redux-store";

export const DialogItems = () => {
    return (
            <div>
                {
                    store.getState().dialogsPage.dialogData.map(el => {
                        return (
                            <NavLink to={`/dialogs/${el.id}`} key={el.id}>
                                <li>{el.name}</li>
                            </NavLink>
                        )
                    })
                }
            </div>
        )

}