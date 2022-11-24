import React from "react";
import s from './MyPosts.module.css'
import {Post} from "../Post/Post";
import {v1} from "uuid";
import {postDataMainType} from "../Profile";

type MyPostType = {
    postData: postDataMainType
}

export const MyPosts = (props:MyPostType) => {

    // let postData = [
    //     {id: v1(), message: 'Hi', like: 1},
    //     {id: v1(), message: 'Hi', like: 2},
    //     {id: v1(), message: 'Hi', like: 2},
    //     {id: v1(), message: 'Hi', like: 5},
    //     {id: v1(), message: 'Hi', like: 4},
    //     {id: v1(), message: 'Hi', like: 3},
    //     {id: v1(), message: 'Hi', like: 65},
    //     {id: v1(), message: 'Hi', like: 0},
    // ]

    // let postElements = props.postData.map(el => <Post id={el.id} message={el.message} like={el.like}/>)

    return (
        <div className={s.myposts}>
            <div className={s.myposts__textsender}>
                <textarea></textarea>
            </div>
            <div className={s.myposts__button}>
                <button>Send message</button>
            </div>
            <div>
                <Post postData={props.postData}/>
                {/*{postElements}*/}
            </div>
        </div>

    )
}