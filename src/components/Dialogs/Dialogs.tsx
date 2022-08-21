import React, {ChangeEvent} from 'react';
import s from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const MessageForm = (props: InjectedFormProps<MessageFormData>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'message'} placeholder={'...Message'}/>
            </div>
            <div>
                <button >SEND</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm<MessageFormData>({form: 'message'})(MessageForm)


const Dialogs = (props: DialogsPropsType) => {

    const onClickSendNewMessage = (dataForm: MessageFormData) => {
        props.clickSendNewMessage(dataForm.message)
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
                    <MessageReduxForm onSubmit={onClickSendNewMessage}/>
                </div>

            </div>
        </div>
    );
};

type MessageFormData = {
    message: string
}



export default Dialogs;