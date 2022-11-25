import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {v1} from "uuid";

export type PostDataMainType = Array<PostDataType>
export type PostDataType = {
    id: string
    message: string
    like: number
}

export type DialogDataMainType = Array<DialogDataType>

export type DialogDataType = {
    id: string
    name: string
}

export type MessageDataMainType = Array<MessageDataType>

export type MessageDataType = {
    id: string
    message: string
}
const AppFunc = () => {
    let [postData, setNewPostData] = useState<PostDataMainType>([
        {id: v1(), message: 'Hi', like: 1},
        {id: v1(), message: 'How', like: 2},
        {id: v1(), message: 'Are you here?', like: 2},
        {id: v1(), message: 'Hiddd', like: 5},
        {id: v1(), message: 'ddd', like: 4},
        {id: v1(), message: 'cdcdsc', like: 3},
        {id: v1(), message: 'dcad', like: 65},
        {id: v1(), message: 'acad', like: 0},
    ])

    let [dialogData, setNewDialogData] = useState<DialogDataMainType>([
        {id: v1(), name:"Alex", },
        {id: v1(), name:"Margo", },
        {id: v1(), name:"Sko", },
        {id: v1(), name:"Mako", },
        {id: v1(), name:"George", },
        {id: v1(), name:"Max", },
    ])

    let [messageData, newMessageData] = useState<MessageDataMainType>([
        {id: v1(), message: 'Hieee'},
        {id: v1(), message: 'dsde'},
        {id: v1(), message: 'wdwedwed'},
        {id: v1(), message: 'dedewd'},
        {id: v1(), message: 'dwwd'},
        {id: v1(), message: 'ewdw'},

    ])
    return (
        <App postData={postData} dialogData={dialogData} messageData={messageData} />
    )
}

ReactDOM.render (
    <AppFunc/>,
    document.getElementById('root')
)










