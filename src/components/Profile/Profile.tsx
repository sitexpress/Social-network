import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPostContainer/MyPostContainer";

export const Profile = () => {
    return (
        <div className={s.mainPage}>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}