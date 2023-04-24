import React, {Component, FC} from 'react';
import {MessageItems} from "../MessageItems/MessageItems";
import {addMessagesAC, dialogsPageType} from "../../../Redux/messageReducer";
import {ReduxStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../../hoc/withAuthRedirect";
import { withRouter } from 'react-router-dom';
// import {withRouter} from "../../../common/withRouter/withRouter";

type MapStatePropsType = {
    dialogsPage: dialogsPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    callBackOnSendMessage: (newMessageData:string) => void
}


export type MapConnectMessageType = MapStatePropsType & MapDispatchToPropsType
const mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        callBackOnSendMessage: (newMessageData:string) => {
            const action = addMessagesAC(newMessageData)
            dispatch(action)
        }
    }
}

export const MessageItemsContainer = compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
    withRouter
)(MessageItems)




