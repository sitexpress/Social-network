import {AnyAction, Dispatch} from "redux";
import {AppThunk, getLoginMeThunkCreator } from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {ReduxStateType} from "./redux-store";


export type AuthType = {
    isInitialized: boolean
}

const initialState = {
    isInitialized: false
}

export const appReducer = (state:AuthType = initialState, action:AuthMainType):AuthType => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state
    }
}

export type AuthMainType = InitializedSucceedACType

export type InitializedSucceedACType = ReturnType<typeof initializedSucceedAC>
export const initializedSucceedAC = (isInitialized:boolean) => {
    return {
        type: 'SET_INITIALIZED',
        isInitialized
    } as const
}


export const initializeAppTC = ():AppThunk => (dispatch) => {
    let promise = dispatch(getLoginMeThunkCreator())

    promise.then(() => {
        dispatch(initializedSucceedAC(true))
    })
}




