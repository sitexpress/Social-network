import React from "react";
import s from './MyPosts.module.css'
import {Post} from "../Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.myposts}>
            {/*<div className={s.myposts__image}>*/}
            {/*    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCXxfjxKYid5L_U9Nfkkd8BHQZPWkvmjJ8w&usqp=CAU" alt=""/>*/}
            {/*</div>*/}

            {/*<div className={s.myposts__descr}>*/}
            {/*    <div>Name:</div>*/}
            {/*    <div>Surname:</div>*/}
            {/*    <div>Age:</div>*/}
            {/*</div>*/}
            
            <div className={s.myposts__textsender}>
                <textarea></textarea>
            </div>
            <div className={s.myposts__button}>
                <button>Send message</button>
            </div>
            <div>
                <Post message={'Hi'} like={1}/>
                <Post message={'How are you'} like={4}/>
                <Post message={'do you?'} like={6}/>
                <Post message={'Hello'} like={5}/>
                <Post message={'Hidden'} like={8}/>
            </div>
        </div>

    )
}