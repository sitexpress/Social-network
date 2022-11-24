import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {v1} from "uuid";

export type postDataMainType = Array<postDataType>

export type postDataType = {
    id: string
    message: string
    like: number
}

export const Profile = () => {

    let postData = [
        {id: v1(), message: 'Hi', like: 1},
        {id: v1(), message: 'Hi', like: 2},
        {id: v1(), message: 'Hi', like: 2},
        {id: v1(), message: 'Hi', like: 5},
        {id: v1(), message: 'Hi', like: 4},
        {id: v1(), message: 'Hi', like: 3},
        {id: v1(), message: 'Hi', like: 65},
        {id: v1(), message: 'Hi', like: 0},
    ]

    return (
        <div className={s.mainPage}>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>
    )
}