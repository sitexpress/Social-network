import React, {ChangeEvent} from 'react';
import {MyPosts} from "../MyPosts/MyPosts";
import {addProfilePostAC, newProfilePostDataAC, ProfilePageType} from "../../../Redux/profileReducer";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

// type MyPostContainerType = {
//     profilePage: ProfilePageType
//     dispatch: (actions: MainActionType) => void
// }

// export const MyPostContainer = () => {
//
//
//     return <StoreContext.Consumer>
//         {
//
//         (store) => {
//
//             const state = store.getState()
//             const addPostHandler = () => {
//                 store.dispatch(addProfilePostAC(state.profilePage.newPostData))
//                 console.log('Done')
//             }
//
//             const onChangeValueHandler =(value:string) => {
//                 store.dispatch(newProfilePostDataAC(value))
//             }
//
//
//             return (
//                 <MyPosts
//                     profilePage={state.profilePage}
//                     callBackOnAdd={addPostHandler}
//                     callBackOnChange={onChangeValueHandler}
//                 />
//             )
//         }
//
//
//     }
//         </StoreContext.Consumer>
// };

type mapStateToPropsType = {
    profilePage: ProfilePageType
    newPostData: string
}

type mapDispatchToProps = {
    callBackOnAdd: (value:string) => void
    callBackOnChange: (value:string) => void
}

export type MapConnectPostType = mapStateToPropsType & mapDispatchToProps


const mapStateToProps = (state:ReduxStateType):mapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        newPostData: ''
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToProps => {
    return {
        callBackOnAdd: (value:string) => {
            dispatch(addProfilePostAC(value))
        },
        callBackOnChange: (value:string) => {
            dispatch(newProfilePostDataAC(value))
        }
    }
}
// callBackOnAdd, callBackOnChange
export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

