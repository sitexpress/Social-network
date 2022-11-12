import React from "react";
import s from "./Post.module.css"

type PostType = {
    message: string
    like: number
}

export const Post = (props: PostType) => {
    return  (
        <div className={s.post}>
            <div className={s.post__img}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vxCAcfKvaKObEwXcnOHnd6E5-OUedVtN0Q&usqp=CAU" alt=""/>
            </div>
            <div className={s.post__post}>
                <div>Message: {props.message}</div>
                <span>like: git{props.like}</span>
            </div>

        </div>
    )
}