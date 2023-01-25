import React from 'react';
import s from "./UserClass.module.css";
import avatarPlug from "../../assets/ava300x300.jpg";
import {UsersType} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersThisType = {
    users: UsersType[]
    pageSize: number
    setTotalCount: number
    currentPage: number
    follow: (userId:string) => void
    unfollow: (userId:string) => void
    onPageChanged:(page:number) => void
}

export const Users = (props:UsersThisType) => {

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

                const followUnfollowHandler = () => el.followed ? props.unfollow(el.id) : props.follow(el.id)
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
                                            <button onClick={followUnfollowHandler}>Unsubscribe</button>
                                            :
                                            <button onClick={followUnfollowHandler}>Subscribe</button>
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

