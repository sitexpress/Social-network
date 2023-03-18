import s from "./ProfileInfo.module.css";
import React from "react";
import {ProfileType} from "../ProfileInfoContainer/ProfileContainer";
import {Preloader} from "../../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type PropsType = {
    profile: ProfileType
    status:string
    updateStatus: (status:string) => void

}

export const ProfileInfo = (props:PropsType) => {
    if(!props.profile) {
        return <Preloader/>
    }
    console.log(props.profile.fullName)
    return (
        <div className={s.profileInfo}>
            <div className={s.profileInfo__cover}>
                <img src="https://wallpaper.dog/large/5478316.jpg" alt="image"/>
            </div>
            <div className={s.profileInfo__image__descr__block}>
                <div className={s.profileInfo__ava}>
                    <img src={`${props.profile.photos.small}`} alt="Avatar"/>
                    <ProfileStatus
                        status={props.status}
                        updateStatus={props.updateStatus}
                    />
                </div>
                <div className={s.profileInfo__descr}>
                    <div>Name:{props.profile.fullName}</div>
                    <div>aboutMe:{props.profile.aboutMe}</div>
                    <div>ID:{props.profile.userId}</div>
                    <div>contacts:{props.profile.contacts.vk}</div>
                    <div>{props.profile.contacts.github}</div>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.website}</div>
                    <div>{props.profile.contacts.youtube}</div>
                    <div>{props.profile.contacts.mainLink}</div>
                </div>
            </div>
        </div>

    )
}