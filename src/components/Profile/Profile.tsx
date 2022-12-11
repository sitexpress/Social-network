import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType, ProfilePageType} from "../../Redux/state";

type PostDataMyType = {
    profilePage: ProfilePageType
}


export const Profile = (props1:PostDataMyType) => {
    return (
        <div className={s.mainPage}>
            <ProfileInfo/>
            <MyPosts profilePage={props1.profilePage}/>
        </div>
    )
}