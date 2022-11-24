import React from "react";
import s from "./Post.module.css"
import {postDataMainType} from "../Profile";

type PostType = {
    postData: postDataMainType
}

export const Post = (props: PostType) => {

    let postElements = props.postData.map(el => {
        return (
            <div>
                <div className={s.post__img}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vxCAcfKvaKObEwXcnOHnd6E5-OUedVtN0Q&usqp=CAU" alt=""/>
                </div>
                <div className={s.el__post}>
                    <div>Message: {el.message}</div>
                    <span>like: git{el.like}</span>
                </div>
            </div>
        )
    })

    return  (
        <div className={s.post}>
            {postElements}
        </div>
    )
}