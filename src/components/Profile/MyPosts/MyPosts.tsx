import React from "react";
import s from './MyPosts.module.css'
import {Post} from "../Post/Post";
import {v1} from "uuid";

export const MyPosts = () => {

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

    let postElements = postData.map(el => <Post id={el.id} message={el.message} like={el.like}/>)

    return (
        <div className={s.myposts}>
            <div className={s.myposts__textsender}>
                <textarea></textarea>
            </div>
            <div className={s.myposts__button}>
                <button>Send message</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>

    )
}