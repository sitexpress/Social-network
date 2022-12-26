import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css'
import {Post} from "../Post/Post";
// import {newPostDataChangeHandler, PostDataType, ProfilePageType, profilePostData} from "../../../Redux/state";
import {v1} from "uuid";
import {MainActionType,ProfilePageType} from "../../../Redux/state";
import {addProfilePostAC,newProfilePostDataAC} from "../../../Redux/profileReducer";

type PostDataMyType = {
    profilePage: ProfilePageType
    // profilePostData: (value:string) => void
    // newPostDataChangeHandler: (value:string) => void
    dispatch: (actions: MainActionType) => void
}

export const MyPosts = (props:PostDataMyType) => {

    // let[value, setValue] = useState('')

    const addPostHandler = () => {
        // props.profilePostData(props.profilePage.newPostData)
        // props.dispatch({type: 'ADD-POST', value: props.profilePage.newPostData})
        props.dispatch(addProfilePostAC(props.profilePage.newPostData))
        console.log('Done')
    }

    const onChangeValueHandler =(e:ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch({type: 'CHANGE-TEXT', value: e.currentTarget.value})
        props.dispatch(newProfilePostDataAC(e.currentTarget.value))
        // props.newPostDataChangeHandler(e.currentTarget.value)
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