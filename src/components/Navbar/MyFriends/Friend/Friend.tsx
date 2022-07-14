import React from 'react';
import s from './Friend.module.css'
import {FriendType} from "../../../../redux/state";

type FriendPropsType = FriendType

const Friend = (props: FriendPropsType) => {
    return (
        <div className={s.friendBlock}>
            <div className={s.avatar}>
                <img src={props.img}/>
            </div>
            <div>{props.name}</div>
        </div>
    );
};

export default Friend;