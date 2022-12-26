import {dialogsPageType, MainActionType} from "./state";

const ADD_MESSAGES = 'ADD-MESSAGES'
const NEW_MESSAGE_VALUE = 'NEW-MESSAGE-VALUE'

export const messageReducer = (state:dialogsPageType, action:MainActionType):dialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGES:
            let newMessage = {id: '8', message: action.payload.messagesValue}
            return {...state, messageData: [...state.messageData, newMessage], newMessageData: ''}
        case NEW_MESSAGE_VALUE:
            return {...state, newMessageData: action.payload.newMessagesValue}
        default:
            return state
    }
}

export type addMessagesACType = ReturnType<typeof addMessagesAC>
export const addMessagesAC = (messagesValue: string) => ({
    type: ADD_MESSAGES,
    payload: {
        messagesValue
    }
} as const)

export type newMessageDataACType = ReturnType<typeof newMessageDataAC>
export const newMessageDataAC = (newMessagesValue: string) => ({
    type: NEW_MESSAGE_VALUE,
    payload: {
        newMessagesValue
    }
} as const)
