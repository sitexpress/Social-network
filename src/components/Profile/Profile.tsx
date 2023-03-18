import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPostContainer/MyPostContainer";
import {ProfilePropsType, ProfileType, TheAuth} from "./ProfileInfoContainer/ProfileContainer";
import {Navigate} from "react-router-dom";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status:string) => void
}

export const Profile = (props:PropsType) => {

    return <div className={s.mainPage}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostContainer/>
        </div>

}