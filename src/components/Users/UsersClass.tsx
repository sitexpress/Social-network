import React from 'react';
import {UsersType} from "../../Redux/usersReducer";
import axios from "axios";
import avatarPlug from "../../assets/ava300x300.jpg"

type UsersThisType = {
    users: UsersType[]
    follow: (userId:string) => void
    unfollow: (userId:string) => void
    setUsers: (users:UsersType[]) => void
}

export class Users extends React.Component<UsersThisType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(resp => {
            this.props.setUsers(resp.data.items)
        })
    }

    render() {
        return (
            <div>
                {/*<button onClick={this.getUsers}>Get users</button>*/}
                {this.props.users.map(el => {

                    const followUnfollowHandler = () => el.followed ? this.props.unfollow(el.id) : this.props.follow(el.id)
                    return (
                        <div>
                            <span>
                                <div>
                                    <img src={`${el.photos.small !== null ? el.photos.small : avatarPlug}`} style={{width:"100px"}} alt="avatar"/>
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
    }
}