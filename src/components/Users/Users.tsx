export const xyz = {}
// import React from 'react';
// import {UsersType} from "../../Redux/usersReducer";
// import {v1} from "uuid";
// import axios from "axios";
// import avatarPlug from "../../assets/ava300x300.jpg"
//
// type UsersThisType = {
//     users: UsersType[]
//     follow: (userId:string) => void
//     unfollow: (userId:string) => void
//     setUsers: (users:UsersType[]) => void
// }
// export const Users = (props:UsersThisType) => {
//
//     let getUsers = () => {
//         props.users.length === 0 &&
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(resp => {
//             props.setUsers(resp.data.items)
//         })
//     }
//
//     return (
//         <div>
//             <button onClick={getUsers}>Get users</button>
//             {props.users.map(el => {
//
//                 const followUnfollowHandler = () => el.followed ? props.unfollow(el.id) : props.follow(el.id)
//                 return (
//                     <div key={el.id}>
//                         <span>
//                             <div>
//                                 <img src={`${el.photos.small !== null ? el.photos.small : avatarPlug}`} style={{width:"100px"}} alt="avatar"/>
//                             </div>
//                         </span>
//                         <span>
//                             <div>
//                                 {
//                                     el.followed
//                                     ?
//                                     <button onClick={followUnfollowHandler}>Unsubscribe</button>
//                                     :
//                                     <button onClick={followUnfollowHandler}>Subscribe</button>
//                                 }
//                             </div>
//                         </span>
//                         <span>
//                            <div>{el.name}</div>
//                         </span>
//                         <span>
//                             <div>{el.status}</div>
//                         </span>
//                         <span>
//                             <div>{"el.location.country"}</div>
//                             <div>{"el.location.city"}</div>
//                         </span>
//                         <hr/>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// };
//
// // {id: v1(), followed: false, fullName: 'Dmitry', status: "I'm a boss", location:{city:'Minsk', country:'Belarus'}},
//
