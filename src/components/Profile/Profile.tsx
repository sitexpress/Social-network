import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {Post} from "./Post/Post";

export const Profile = () => {
    return (
        <div className={s.mainPage}>
            <div className={s.mainPage__img}>
                <img src="https://wallpaper.dog/large/5478316.jpg" alt="image"/>
            </div>

                <MyPosts/>
                <Post message={'Hi'} like={1}/>
                <Post message={'How are you'} like={4}/>
                <Post message={'do you?'} like={6}/>
                <Post message={'Hello'} like={5}/>
                <Post message={'Hidden'} like={8}/>

            </div>
    )
}