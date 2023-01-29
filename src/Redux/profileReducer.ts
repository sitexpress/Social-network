import {v1} from "uuid";
import {ContactsType, ProfileType} from "../components/Profile/ProfileInfoContainer/ProfileContainer";
import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const CHANGE_TEXT = 'CHANGE-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

const initial:ProfilePageType = {
        postData: [
            {id: v1(), message: 'Hi', like: 1},
            {id: v1(), message: 'How', like: 2},
            {id: v1(), message: 'Are you here?', like: 2},
            {id: v1(), message: 'Hiddd', like: 5},
            {id: v1(), message: 'ddd', like: 4},
            {id: v1(), message: 'cdcdsc', like: 3},
            {id: v1(), message: 'dcad', like: 65},
            {id: v1(), message: 'acad', like: 0},
        ],
        newPostData: '',
        profile: {
            aboutMe:'',
            contacts:{} as ContactsType,
            fullName:'',
            lookingForAJob: false,
            lookingForAJobDescription:'',
            photos:{
                large:'',
                small:''
            },
            userId:0
        }
}

export type PostDataType = {
    id: string
    message: string
    like: number
}

export type ProfilePageType = {
    postData: PostDataType[]
    newPostData: string
    profile: ProfileType
}

export const profileReducer = (state:ProfilePageType = initial, action:MainProfileActionType):ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: v1(), message: action.value, like: 0}
            return {...state, postData: [newPost, ...state.postData], newPostData:''}
        case CHANGE_TEXT:
            return {...state, newPostData: action.value}
        case SET_USER_PROFILE:
            console.log('from reducer ',action.profile)
            return {...state, profile:action.profile}
        default:
            return state
    }
}


export type MainProfileActionType =
    addProfilePostACType
    | newProfilePostDataACType
    | setUserProfileACType


export type addProfilePostACType = ReturnType<typeof addProfilePostAC>
export const addProfilePostAC = (value: string) => {
    return {
        type: ADD_POST,
        value: value
    } as const
}

export type newProfilePostDataACType = ReturnType<typeof newProfilePostDataAC>
export const newProfilePostDataAC = (value: string) => ({
    type: CHANGE_TEXT,
    value: value
} as const)

export type setUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile= (profile: ProfileType) => ({
    type: SET_USER_PROFILE,
    profile
} as const)



export const getProfileThunkCreator = (userId:number) => {
    return (dispatch:Dispatch<MainProfileActionType>) => {
        usersAPI.getProfile(userId)
            .then(resp => {
                console.log('from thunk ', resp.data)
            dispatch(setUserProfile(resp.data))
        })
    }
}

