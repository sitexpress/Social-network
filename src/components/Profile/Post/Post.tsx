import React from "react";
import s from "./Post.module.css"
import {PostDataType} from "../../../Redux/state";

type PostDataMyType = {
    postData: PostDataType[]
}

export const Post = (props: PostDataMyType) => {

    let postElements = props.postData.map(el => {
        return (
            <div key={el.id} className={s.post}>
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
        <div>
            {postElements}
        </div>
    )
}