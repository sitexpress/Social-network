import React from "react";
import s from './MyPosts.module.css'

export const MyPosts = () => {
    return (
        <div className={s.myposts}>

            <div className={s.myposts__image}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCXxfjxKYid5L_U9Nfkkd8BHQZPWkvmjJ8w&usqp=CAU" alt=""/>
            </div>

            <div className={s.myposts__descr}>
                <div>Name:</div>
                <div>Surname:</div>
                <div>Age:</div>
            </div>
            
            <div>
                <textarea></textarea>
            </div>
        </div>

    )
}