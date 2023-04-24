import {applyMiddleware, combineReducers, createStore} from "redux";
import {MainMessagesActionType, messageReducer} from "./messageReducer";
import {MainProfileActionType, profileReducer} from "./profileReducer";
import {MainUsersActionType, usersReducer} from "./usersReducer";
import {AuthMainType, authReducer} from "./authReducer";
import thunkMiddleware, {ThunkMiddleware} from "redux-thunk"
    import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./appReducer";

// объединяя reducer-ы с помощью combineReducer
// мы задаём сруктуру нашего единственного объекта-состояния

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

// непосредственно создаём store
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware as ThunkMiddleware))

// определяем автоматически тип всего объекта состояния
export type ReduxStateType = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch;

// все типы экшенов для всего app если нужно
export type AppActionType = MainProfileActionType | MainUsersActionType | AuthMainType | MainMessagesActionType

//@ts-ignore
window.store = store



