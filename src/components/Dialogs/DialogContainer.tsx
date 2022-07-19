import React from 'react';
import {SendNewMessageAC, UpdateTextMessageAC} from "../../redux/messagesReducer";
import {ReduxStore} from "../../redux/redux-store";
import Dialogs from "./Dialogs";

type DialogContainerPropsType = {
    store: ReduxStore
}

const DialogContainer = (props: DialogContainerPropsType) => {
    let state = props.store.getState().messages
    const changeMessageText = (body: string) => {
        props.store.dispatch(UpdateTextMessageAC(body))
    }
    const clickSendNewMessage = () => {
        props.store.dispatch(SendNewMessageAC())
    }
    return (
        <div>
            <Dialogs
                dialogsData={state.dialogsData}
                messagesData={state.messagesData}
                newMessageText={state.newMessageText}
                changeMessageText={changeMessageText}
                clickSendNewMessage={clickSendNewMessage}
            />
        </div>
    );
};

export default DialogContainer;