import React from 'react';
import {DialogType, MessageType, SendNewMessageAC, UpdateTextMessageAC} from "../../redux/messagesReducer";
import {AppRootStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import WithAuthRedirectContainer from "../../hoc/WithAuthRedirectContainer";

type MapStatePropsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageText: string
}
type MapDispatchPropsType = {
    changeMessageText: (body: string) => void
    clickSendNewMessage: () => void
}
export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogsData: state.messages.dialogsData,
        messagesData: state.messages.messagesData,
        newMessageText: state.messages.newMessageText
    }
}

export const DialogContainer = compose<React.ComponentType>(
    connect(mapStateToProps,
    {
        changeMessageText: UpdateTextMessageAC,
        clickSendNewMessage: SendNewMessageAC
    }),
WithAuthRedirectContainer)(Dialogs)


