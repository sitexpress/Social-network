import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../Redux/state";

type PostDataMyType = {
    postData: PostDataType[]
}
export const Profile = (props:PostDataMyType) => {
    return (
        <div className={s.mainPage}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}