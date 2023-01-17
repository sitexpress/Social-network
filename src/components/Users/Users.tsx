import React from 'react';
import {UsersType} from "../../Redux/usersReducer";
import {v1} from "uuid";

type UsersThisType = {
    users: UsersType[]
    follow: (userId:string) => void
    unfollow: (userId:string) => void
    setUsers: (users:UsersType[]) => void
}
export const Users = (props:UsersThisType) => {
    props.users.length === 0 &&
    props.setUsers([
        {
            id: v1(),
            image: "https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png",
            followed: false,
            fullName: 'Dmitry',
            status: "I'm a boss",
            location:{city:'Minsk', country:'Belarus'}
        },
        {
            id: v1(),
            image: "https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png",
            followed: true,
            fullName: 'Sasha',
            status: "I'm a boss",
            location:{city:'Moscow', country:'Russia'}},
        {
            id: v1(),
            image: "https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png",
            followed: false,
            fullName: 'Andrew',
            status: "I'm a boss",
            location:{city:'Ukrain', country:'Kiev'}},
    ])

    return (
        <div>
            {props.users.map(el => {

                const followUnfollowHandler = () => el.followed ? props.unfollow(el.id) : props.follow(el.id)
                return (
                    <div key={el.id}>
                        <span>
                            <div>
                                <img src={el.image} style={{width:"100px"}} alt="avatar"/>
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
                           <div>{el.fullName}</div>
                        </span>
                        <span>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );
};

// {id: v1(), followed: false, fullName: 'Dmitry', status: "I'm a boss", location:{city:'Minsk', country:'Belarus'}},

