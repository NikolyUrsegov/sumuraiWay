import React from 'react';
import s from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
}
const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsData.map(el => (
                    <DialogItem id={el.id} name={el.name} key={el.id}/>
                ))}
            </div>
            <div className={s.messages}>
                {props.messagesData.map(el => (
                    <Message message={el.message} key={el.id}/>
                ))}
            </div>
            <div>
                <textarea></textarea>
                <button>add</button>
            </div>
        </div>
    );
};

export default Dialogs;