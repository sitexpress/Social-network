import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {connect} from "react-redux";
import {ReduxStateType} from "./redux-store";
import { ThunkAction } from "redux-thunk";


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
            }
        default:
            return state
    }
}

export type AuthMainType = setAuthUserDataACType

export type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (id:string, email:string, login:string, isAuth:boolean) => {
    return {
        type: 'SET_USER_DATA',
        data: {id, email, login, isAuth}
    } as const
}


export const getLoginMeThunkCreator = () => (dispatch:Dispatch<AuthMainType>) => {
        authAPI.me().then(resp => {
            if (resp.data.resultCode === 0) {
                let {id, email, login, isAuth} = resp.data.data
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        })
    }

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxStateType, unknown, AnyAction>
export const loginThunkCreator = (email:string, password:string, rememberMe:boolean):AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(resp => {
        if (resp.data.resultCode === 0) {
            dispatch(getLoginMeThunkCreator())
            // let {id, email, login} = resp.data.data
            // dispatch(setAuthUserDataAC(id, email, login))
        }
    })
}

export const logoutThunkCreator = ():AppThunk => (dispatch) => {
    authAPI.logout()
        .then(resp => {
        if (resp.data.resultCode === 0) {
            dispatch(getLoginMeThunkCreator())
            // let {id, email, login} = resp.data.data
            // dispatch(setAuthUserDataAC(id, email, login))
            dispatch(setAuthUserDataAC('', '', '', false))
        }
    })
}




