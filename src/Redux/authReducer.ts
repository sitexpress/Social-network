import {Dispatch} from "redux";
import {authAPI} from "../api/api";


export type AuthType = {
    id: string
    email: string
    login: string
    isAuth: boolean
}

const initialState = {
    id: '',
    email: '',
    login: '',
    isAuth: false
}


export const authReducer = (state:AuthType = initialState, action:AuthMainType):AuthType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export type AuthMainType = setAuthUserDataACType

export type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (id:string, email:string, login:string) => {
    return {
        type: 'SET_USER_DATA',
        data: {id, email, login}
    } as const
}


export const getLoginMeThunkCreator = () => {
    return (dispatch:Dispatch<AuthMainType>) => {
        authAPI.me().then(resp => {
            if (resp.data.resultCode === 0) {
                let {id, email, login} = resp.data.data
                dispatch(setAuthUserDataAC(id, email, login))
            }
        })
    }
}
