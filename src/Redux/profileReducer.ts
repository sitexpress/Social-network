import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const CHANGE_TEXT = 'CHANGE-TEXT'

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
        newPostData: ''
}

export type PostDataType = {
    id: string
    message: string
    like: number
}

export type ProfilePageType = {
    postData: PostDataType[]
    newPostData: string
}

export const profileReducer = (state:ProfilePageType = initial, action:MainProfileActionType):ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: v1(), message: action.value, like: 0}
            return {...state, postData: [newPost, ...state.postData], newPostData:''}
        case CHANGE_TEXT:
            return {...state, newPostData: action.value}
        default:
            return state
    }
}


export type MainProfileActionType = addProfilePostACType | newProfilePostDataACType


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