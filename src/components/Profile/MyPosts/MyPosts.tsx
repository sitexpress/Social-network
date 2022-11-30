import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css'
import {Post} from "../Post/Post";
import {PostDataType} from "../../../Redux/state";
import {v1} from "uuid";


type PostDataMyType = {
    postData: PostDataType[]
}

export const MyPosts = (props:PostDataMyType) => {

    let[value, setValue] = useState('')

    const addPostHandler = () => {
        props.postData.push({id: v1(), message: value, like: 0})
        console.log('Done')
        setValue('')
    }

    const onChangeValueHandler =(e:ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
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