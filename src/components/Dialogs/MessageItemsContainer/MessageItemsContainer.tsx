import React from 'react';
import {MessageItems} from "../MessageItems/MessageItems";
import {addMessagesAC, dialogsPageType, newMessageDataAC} from "../../../Redux/messageReducer";
import {ReduxStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage:dialogsPageType,
}
type MapDispatchToPropsType = {
    callBackOnSendMessage: () => void
    callBackOnChangeMessage: (value:string) => void
}
export type MapConnectMessageType = MapStatePropsType & MapDispatchToPropsType


const mapStateToProps = (state:ReduxStateType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        callBackOnSendMessage: () => {
            const action = addMessagesAC()
            dispatch(action)
        },
        callBackOnChangeMessage: (value:string) => {
            const action = newMessageDataAC(value)
            dispatch(action)
        }
    }
}

export const MessageItemsContainer = connect(mapStateToProps, mapDispatchToProps)(MessageItems)

