import React from 'react';
import s from "./UserClass.module.css";
import avatarPlug from "../../assets/ava300x300.jpg";
import {setFollowingInProgress, UsersType} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersThisType = {
    users: UsersType[]
    pageSize: number
    setTotalCount: number
    currentPage: number
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    onPageChanged:(page:number) => void
    isFollowingInProgress: Array<number>
    setFollowingInProgress:(id: number, isFetching:boolean) => void
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void

}

export const Users = (props:UsersThisType) => {
    console.log(props.isFollowingInProgress)

    let pagesCount = Math.ceil(props.setTotalCount / props.pageSize/1000)
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p}
                        onClick={() => props.onPageChanged(p)}
                        className={props.currentPage === p ? s.pageNumber_selected : s.pageNumber}>{p}</span>
                })}
            </div>
            {/*<button onClick={this.getUsers}>Get users</button>*/}
            {props.users.map(el => {
                console.log('users.tsx',typeof el.id)
                // const followUnfollowHandler = () => el.followed ? props.unfollow(el.id) : props.follow(el.id)
                return (
                    <div key={el.id}>
                            <span>
                                <div>
                                    <NavLink to={`/profile/${el.id}`}>
                                        <img src={`${el.photos.small !== null ? el.photos.small : avatarPlug}`} style={{width:"100px"}} alt="avatar"/>
                                    </NavLink>
                                </div>
                            </span>
                            <span>
                                <div>
                                    {
                                        el.followed
                                            ?
                                            <button disabled={props.isFollowingInProgress.some(id => id == el.id)} onClick={() => {
                                                props.unfollowThunkCreator(el.id)
                                            }}>Unsubscribe</button>
                                            :
                                            <button  disabled={props.isFollowingInProgress.some(id => id == el.id)} onClick={() => {
                                                props.followThunkCreator(el.id)
                                            }}>Subscribe</button>
                                    }
                                </div>
                            </span>
                            <span>
                               <div>{el.name}</div>
                            </span>
                            <span>
                                <div>{el.status}</div>
                            </span>
                            <span>
                                <div>{"el.location.country"}</div>
                                <div>{"el.location.city"}</div>
                            </span>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );
};

