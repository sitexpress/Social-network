import {combineReducers, createStore} from "redux";
import {messageReducer} from "./messageReducer";
import {profileReducer} from "./profileReducer";
import {usersReducer} from "./usersReducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    usersPage: usersReducer
})

export type ReduxStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer)

//@ts-ignore
window.store = store



