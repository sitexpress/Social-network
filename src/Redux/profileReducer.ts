import {v1} from "uuid";
import {ContactsType, ProfileType} from "../components/Profile/ProfileInfoContainer/ProfileContainer";
import {Dispatch} from "redux";
import {authAPI, profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

export type PostDataType = {
    id: string
    message: string
    like: number
}

export type ProfilePageType = {
    postData: PostDataType[]
    newPostData: string
    profile: ProfileType
    status: string
}

const initial: ProfilePageType = {
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
        aboutMe: '',
        contacts: {} as ContactsType,
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos: {
            large: '',
            small: ''
        },
        userId: 0,
    },
    status: ''
}

export const profileReducer = (state: ProfilePageType = initial, action: MainProfileActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: v1(), message: action.value, like: 0}
            return {...state, postData: [newPost, ...state.postData]}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}


export type MainProfileActionType =
    addProfilePostACType
    | setUserProfileACType
    | setStatusACType


// AC
export type addProfilePostACType = ReturnType<typeof addProfilePostAC>
export const addProfilePostAC = (value: string) => {
    return {
        type: ADD_POST,
        value: value
    } as const
}

export type setUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => ({
    type: SET_USER_PROFILE,
    profile
} as const)

export type setStatusACType = ReturnType<typeof setStatus>
export const setStatus = (status: string) => ({
    type: SET_STATUS,
    status
} as const)


// Thunk
export const getProfileTC = (userId: number) => {
    return (dispatch: Dispatch<MainProfileActionType>) => {
        usersAPI.getProfile(userId)
            .then(res => {
                dispatch(setUserProfile(res.data))
            })
    }
}

export const getStatusTC = (userId: number) => (dispatch: Dispatch<MainProfileActionType>) => {
    profileAPI.getStatus(userId)
        .then(res => {
            console.log('getStatus ', res)
            dispatch(setStatus(res.data))
        })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch<MainProfileActionType>) => {
    profileAPI.updateStatus(status)
        .then(res => {
            console.log('setStatus ', res)

            if (res.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

