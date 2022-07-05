import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string | number
    name: string
}

const DialogItem = (props: DialogItemPropsType) => {
    const path = '/dialog/' + props.id
    return (
        <div>
            <div className={s.dialog}>
                <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
            </div>
        </div>
    );
};

export default DialogItem;