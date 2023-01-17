import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css'
import {Post} from "../Post/Post";
import {MapConnectPostType} from "../MyPostContainer/MyPostContainer";

// type PostDataMyType = {
//     profilePage: ProfilePageType
//     callBackOnAdd: () => void
//     callBackOnChange: (value:string) => void
// }

export const MyPosts = (props:MapConnectPostType) => {

    const addPostHandler = () => {
        props.callBackOnAdd(props.profilePage.newPostData)
        console.log('Done')
    }

    const onChangeValueHandler =(e:ChangeEvent<HTMLTextAreaElement>) => {
        props.callBackOnChange(e.currentTarget.value)
    }

    return (
        <div className={s.myposts}>
            <div className={s.myposts__textsender}>
                <textarea value={props.profilePage.newPostData} onChange={onChangeValueHandler}></textarea>
            </div>
            <div className={s.myposts__button}>
                <button onClick={addPostHandler}>Send message</button>
            </div>
            <div>
                <Post postData={props.profilePage.postData}/>
            </div>
        </div>

    )
}