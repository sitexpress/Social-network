import {v1} from "uuid";

const ADD_MESSAGES = 'ADD-MESSAGES'
const NEW_MESSAGE_VALUE = 'NEW-MESSAGE-VALUE'

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
        newMessageData: ''
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
    newMessageData: string
}

export const messageReducer = (state:dialogsPageType = initial, action:MainMessagesActionType):dialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGES:
            let newMessage = {id: v1(), message: state.newMessageData}
            return {...state, messageData: [...state.messageData, newMessage], newMessageData: ''}
        case NEW_MESSAGE_VALUE:
            return {...state, newMessageData: action.payload.newMessagesValue}
        default:
            return state
    }
}

export type MainMessagesActionType = addMessagesACType | newMessageDataACType

export type addMessagesACType = ReturnType<typeof addMessagesAC>
export const addMessagesAC = () => ({
    type: ADD_MESSAGES,
} as const)

export type newMessageDataACType = ReturnType<typeof newMessageDataAC>
export const newMessageDataAC = (newMessagesValue: string) => ({
    type: NEW_MESSAGE_VALUE,
    payload: {
        newMessagesValue
    }
} as const)
