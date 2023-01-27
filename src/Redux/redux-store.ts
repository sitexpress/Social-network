import {combineReducers, createStore} from "redux";
import {messageReducer} from "./messageReducer";
import {profileReducer} from "./profileReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type ReduxStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer)

//@ts-ignore
window.store = store



