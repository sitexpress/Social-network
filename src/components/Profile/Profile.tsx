import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPostContainer/MyPostContainer";
import {ProfilePropsType, ProfileType} from "./ProfileInfo/ProfileContainer";

type PropsType = {
    profile: ProfileType
}

export const Profile = (props:PropsType) => {
    return (
        <div className={s.mainPage}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    )
}