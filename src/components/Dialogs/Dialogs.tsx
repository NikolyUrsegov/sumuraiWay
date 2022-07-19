import React, {ChangeEvent} from 'react';
import s from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogContainer";

const Dialogs = (props: DialogsPropsType) => {
    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.changeMessageText(body)
    }
    const onClickSendNewMessage = () => {
        props.clickSendNewMessage()
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsData.map(el => (
                    <DialogItem id={el.id} name={el.name} key={el.id}/>
                ))}
            </div>
            <div className={s.messages}>
                <div>
                    {props.messagesData.map(el => (
                        <Message message={el.message} key={el.id}/>
                    ))}
                </div>
                <div>
                    <div>
                        <textarea value={props.newMessageText} onChange={onChangeMessageText}/>
                    </div>
                    <div>
                        <button onClick={onClickSendNewMessage}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;