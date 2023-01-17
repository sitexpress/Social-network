export{}
// import {v1} from "uuid";
// import {
//     addProfilePostACType,
//     newProfilePostDataACType,
//     profileReducer
// } from "./profileReducer";
// import {addMessagesACType, messageReducer, newMessageDataACType} from "./messageReducer";
//
// type ProfilePageType = {
//     postData: PostDataType[]
//     newPostData: string
// }
//
// type dialogsPageType = {
//     dialogData: DialogDataType[]
//     messageData: MessageDataType[]
//     newMessageData: string
// }
//
// type PostDataType = {
//     id: string
//     message: string
//     like: number
// }
// type DialogDataType = {
//     id: string
//     name: string
// }
// type MessageDataType = {
//     id: string
//     message: string
// }
//
// export type StateType = {
//     profilePage: ProfilePageType
//     dialogsPage: dialogsPageType
// }
// //-------------------------------------------------------------------------------------------
// export type StoreType = {
//     _state: StateType
//     getState: () => StateType
//     _reRender: (state: StateType) => void
//     subscriber: (observer: (state: StateType) => void) => void
//     dispatch: (action: MainActionType) => void
//
// }
//
// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             postData: [
//                 {id: v1(), message: 'Hi', like: 1},
//                 {id: v1(), message: 'How', like: 2},
//                 {id: v1(), message: 'Are you here?', like: 2},
//                 {id: v1(), message: 'Hiddd', like: 5},
//                 {id: v1(), message: 'ddd', like: 4},
//                 {id: v1(), message: 'cdcdsc', like: 3},
//                 {id: v1(), message: 'dcad', like: 65},
//                 {id: v1(), message: 'acad', like: 0},
//             ],
//             newPostData: ''
//         },
//         dialogsPage: {
//             dialogData: [
//                 {id: '1', name: "Alex",},
//                 {id: '2', name: "Margo",},
//                 {id: '3', name: "Sko",},
//                 {id: '4', name: "Mako",},
//                 {id: '5', name: "George",},
//                 {id: '6', name: "Max",},
//             ],
//             messageData: [
//                 {id: '1', message: 'Hieee'},
//                 {id: '2', message: 'dsde'},
//                 {id: '3', message: 'wdwedwed'},
//                 {id: '4', message: 'dedewd'},
//                 {id: '5', message: 'dwwd'},
//                 {id: '6', message: 'ewdw'},
//
//             ],
//             newMessageData: ''
//         }
//     },
//     _reRender(state: StateType) {
//         console.log('state is changed')
//     },
//
//     getState() {
//         return this._state
//     },
//     subscriber(observer: (state: StateType) => void) {
//         this._reRender = observer
//     },
//     dispatch(action: MainActionType) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = messageReducer(this._state.dialogsPage, action)
//         this._reRender(this._state)
//     }
// }
//
// // @ts-ignore
// window.state = store.getState()




