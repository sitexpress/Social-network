import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MainActionType, PostDataType, ProfilePageType} from "../../Redux/state";

type PostDataMyType = {
    profilePage: ProfilePageType
    // profilePostData: (value:string) => void
    // newPostDataChangeHandler: (value:string) => void
    dispatch: (actions: MainActionType) => void
}


export const Profile = (props:PostDataMyType) => {
    return (
        <div className={s.mainPage}>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                // profilePostData={props.profilePostData}
                // newPostDataChangeHandler={props.newPostDataChangeHandler}
                dispatch={props.dispatch}
            />
        </div>
    )
}