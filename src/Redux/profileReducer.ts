import {v1} from "uuid";
import {MainActionType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const CHANGE_TEXT = 'CHANGE-TEXT'

export const profileReducer = (state:ProfilePageType, action:MainActionType):ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: v1(), message: action.value, like: 0}
            return {...state, postData: [...state.postData, newPost]}
        case CHANGE_TEXT:
            return {...state, newPostData: action.value}
        default:
            return state
    }
}

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