import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataMainType} from "../../index";

type PostDataType = {
    postData: PostDataMainType
}
export const Profile = (props:PostDataType) => {
    return (
        <div className={s.mainPage}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}