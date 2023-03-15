import React, {ChangeEvent} from 'react'
import {MapConnectMessageType} from "../MessageItemsContainer/MessageItemsContainer";


export const MessageItems = (props:MapConnectMessageType) => {

    const sendMessageHandler = () => {
        props.callBackOnSendMessage()
    }

    const onChangeMessageHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.callBackOnChangeMessage(e.currentTarget.value)
    }

    // return !props.isAuth
    //     ?
    //     <Navigate to={"/login"}/>
    //     :
    //     <div>
    //         <div>
    //             <textarea value={props.dialogsPage.newMessageData} onChange={onChangeMessageHandler}></textarea>
    //             <button onClick={sendMessageHandler}>Send message</button>
    //         </div>
    //         <div>
    //             {props.dialogsPage.messageData.map(el => <div key={el.id}>{el.message}</div>)}
    //         </div>
    //     </div>

    return  <div>
                <div>
                    <textarea value={props.dialogsPage.newMessageData} onChange={onChangeMessageHandler}></textarea>
                    <button onClick={sendMessageHandler}>Send message</button>
                </div>
                <div>
                    {props.dialogsPage.messageData.map(el => <div key={el.id}>{el.message}</div>)}
                </div>
            </div>
}