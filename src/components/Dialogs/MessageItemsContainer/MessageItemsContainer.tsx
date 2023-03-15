import React from 'react';
import {MessageItems} from "../MessageItems/MessageItems";
import {addMessagesAC, dialogsPageType, newMessageDataAC} from "../../../Redux/messageReducer";
import {ReduxStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AuthType} from "../../../Redux/authReducer";
import {Navigate} from "react-router-dom";
import {ProfileApiComponent} from "../../Profile/ProfileInfoContainer/ProfileContainer";
import {WithAuthRedirect} from "../../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: dialogsPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    callBackOnSendMessage: () => void
    callBackOnChangeMessage: (value: string) => void
}




const AuthRedirectComponent =  WithAuthRedirect(MessageItems)

export type MapConnectMessageType = MapStatePropsType & MapDispatchToPropsType
const mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        callBackOnSendMessage: () => {
            const action = addMessagesAC()
            dispatch(action)
        },
        callBackOnChangeMessage: (value: string) => {
            const action = newMessageDataAC(value)
            dispatch(action)
        }
    }
}

export const MessageItemsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

