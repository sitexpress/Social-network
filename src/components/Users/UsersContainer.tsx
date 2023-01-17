import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import { Dispatch } from 'redux';
import {ReduxStateType} from "../../Redux/redux-store";
import {followAC, followACType, setUsersAC, unFollowAC, UsersType} from "../../Redux/usersReducer";


const mapStateToProps = (state:ReduxStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        follow: (userId:string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}



export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

