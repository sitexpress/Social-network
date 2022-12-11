import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css'
import {Post} from "../Post/Post";
import {newPostDataChangeHandler, PostDataType, ProfilePageType, profilePostData} from "../../../Redux/state";
import {v1} from "uuid";


type PostDataMyType = {
    profilePage: ProfilePageType
}

export const MyPosts = (props:PostDataMyType) => {

    // let[value, setValue] = useState('')

    const addPostHandler = () => {
        profilePostData(props.profilePage.newPostData)
        console.log('Done')
    }

    const onChangeValueHandler =(e:ChangeEvent<HTMLTextAreaElement>) => {
        newPostDataChangeHandler(e.currentTarget.value)
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