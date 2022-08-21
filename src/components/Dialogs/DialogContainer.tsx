import React from 'react';
import {DialogType, MessageType, SendNewMessageAC} from "../../redux/messagesReducer";
import {AppRootStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import WithAuthRedirectContainer from "../../hoc/WithAuthRedirectContainer";

type MapStatePropsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
}
type MapDispatchPropsType = {
    clickSendNewMessage: (body:string) => void
}
export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogsData: state.messages.dialogsData,
        messagesData: state.messages.messagesData,
    }
}

export const DialogContainer = compose<React.ComponentType>(
    connect(mapStateToProps,
    {
        clickSendNewMessage: SendNewMessageAC
    }),
WithAuthRedirectContainer)(Dialogs)


