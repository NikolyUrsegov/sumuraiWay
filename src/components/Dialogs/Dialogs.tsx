import React from 'react';
import s from './Dialog.module.css'
import DialogItem from "./DialogItem";
import Message from "./Message";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={'1'} name={'Kolya'}/>
                <DialogItem id={'2'} name={'Petya'}/>
                <DialogItem id={'3'} name={'Shasha'}/>
                <DialogItem id={'4'} name={'Artem'}/>
                <DialogItem id={'5'} name={'Vasya'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'Hi'}/>
                <Message message={'jkl'}/>
                <Message message={'klk'}/>
                <Message message={'nkml,'}/>
            </div>
        </div>
    );
};

export default Dialogs;