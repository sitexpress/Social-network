import React from 'react';
import s from "./UserClass.module.css";
import avatarPlug from "../../assets/ava300x300.jpg";
import {setFollowingInProgress, UsersType} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                    return <span
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
                                                props.setFollowingInProgress(el.id, true)
                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                                    withCredentials:true,
                                                    headers: {
                                                        'API-KEY': "63052fc1-39d2-496e-872a-b5f91fbb5674"
                                                    }
                                                })
                                                    .then(resp => {
                                                        if (resp.data.resultCode == 0) {
                                                            props.unfollow(el.id)
                                                            props.setFollowingInProgress(el.id, false)
                                                        } else {
                                                            console.log('Something went wrong')
                                                        }
                                                    })
                                            }}>Unsubscribe</button>
                                            :
                                            <button  disabled={props.isFollowingInProgress.some(id => id == el.id)} onClick={() => {
                                                props.setFollowingInProgress(el.id, true)
                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                                    withCredentials:true,
                                                    headers: {
                                                        'API-KEY': "63052fc1-39d2-496e-872a-b5f91fbb5674"
                                                    }
                                                })
                                                    .then(resp => {
                                                        if (resp.data.resultCode == 0) {
                                                            props.follow(el.id)
                                                            props.setFollowingInProgress(el.id, false)
                                                        } else {
                                                            console.log('Something went wrong')
                                                        }
                                                })
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

