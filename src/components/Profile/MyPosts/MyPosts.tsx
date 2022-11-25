import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css'
import {Post} from "../Post/Post";
import {PostDataMainType} from "../../../index";

type PostDataType = {
    postData: PostDataMainType
}

export const MyPosts = (props:PostDataType) => {

    let[value, setValue] = useState('')

    const addPostHandler = () => {
        return console.log('clicked')
    }

    const onChangeValueHandler =(e:ChangeEvent<HTMLTextAreaElement>) => {
        return console.log(e.currentTarget.value)
    }

    return (
        <div className={s.myposts}>
            <div className={s.myposts__textsender}>
                <textarea value={value} onChange={onChangeValueHandler}></textarea>
            </div>
            <div className={s.myposts__button}>
                <button onClick={addPostHandler}>Send message</button>
            </div>
            <div>
                <Post postData={props.postData}/>
            </div>
        </div>

    )
}