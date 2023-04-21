import {v1} from "uuid";

const ADD_MESSAGES = 'ADD-MESSAGES'

const initial:dialogsPageType = {
        dialogData: [
            {id: '1', name: "Alex",},
            {id: '2', name: "Margo",},
            {id: '3', name: "Sko",},
            {id: '4', name: "Mako",},
            {id: '5', name: "George",},
            {id: '6', name: "Max",},
        ],
        messageData: [
            {id: '1', message: 'Hieee'},
            {id: '2', message: 'dsde'},
            {id: '3', message: 'wdwedwed'},
            {id: '4', message: 'dedewd'},
            {id: '5', message: 'dwwd'},
            {id: '6', message: 'ewdw'},

        ],
}

export type DialogDataType = {
    id: string
    name: string
}
export type MessageDataType = {
    id: string
    message: string
}

export type dialogsPageType = {
    dialogData: DialogDataType[]
    messageData: MessageDataType[]
}

export const messageReducer = (state:dialogsPageType = initial, action:MainMessagesActionType):dialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGES:
            let newMessage = {id: v1(), message: action.newMessageData}
            return {...state, messageData: [...state.messageData, newMessage]}
        default:
            return state
    }
}

export type MainMessagesActionType =
    addMessagesACType

export type addMessagesACType = ReturnType<typeof addMessagesAC>
export const addMessagesAC = (newMessageData:string) => ({
    type: ADD_MESSAGES, newMessageData
} as const)


