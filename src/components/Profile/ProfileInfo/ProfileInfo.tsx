import s from "./ProfileInfo.module.css";
import React from "react";
import {ProfilePropsType, ProfileType} from "./ProfileContainer";
import {Preloader} from "../../../common/preloader/Preloader";

type PropsType = {
    profile: ProfileType
}

export const ProfileInfo = (props:PropsType) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.profileInfo__cover}>
                <img src="https://wallpaper.dog/large/5478316.jpg" alt="image"/>
            </div>
            <div className={s.profileInfo__image__descr__block}>
                <div className={s.profileInfo__ava}>
                    <img src={`${props.profile.photos.small}`} alt="Avatar"/>
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