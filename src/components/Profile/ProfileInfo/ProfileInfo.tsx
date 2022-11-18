import s from "./ProfileInfo.module.css";
import React from "react";


export const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.profileInfo__cover}>
                <img src="https://wallpaper.dog/large/5478316.jpg" alt="image"/>
            </div>
            <div className={s.profileInfo__image__descr__block}>
                <div className={s.profileInfo__ava}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCXxfjxKYid5L_U9Nfkkd8BHQZPWkvmjJ8w&usqp=CAU" alt=""/>
                </div>
                <div className={s.profileInfo__descr}>
                    <div>Name:</div>
                    <div>Surname:</div>
                    <div>Age:</div>
                </div>
            </div>
        </div>

    )
}