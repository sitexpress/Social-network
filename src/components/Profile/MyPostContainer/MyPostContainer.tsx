import React, {ChangeEvent} from 'react';
import {MyPosts} from "../MyPosts/MyPosts";
import {addProfilePostAC, ProfilePageType} from "../../../Redux/profileReducer";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    profilePage: ProfilePageType
    newPostData: string
}

type mapDispatchToProps = {
    callBackOnAdd: (value:string) => void
    // callBackOnChange: (value:string) => void
}

export type MapConnectPostType = mapStateToPropsType & mapDispatchToProps


const mapStateToProps = (state:ReduxStateType):mapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        newPostData: ''
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToProps => {
    return {
        callBackOnAdd: (value:string) => {
            dispatch(addProfilePostAC(value))
        },
        // callBackOnChange: (value:string) => {
        //     dispatch(newProfilePostDataAC(value))
        // }
    }
}
// callBackOnAdd, callBackOnChange
export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

