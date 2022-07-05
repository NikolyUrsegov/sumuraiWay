import React from 'react';
import s from './Post.module.css'
type PostPropsType = {
    message: string
    likeCount: number
}

const Post = (props:PostPropsType) => {
    return (
            <div className={s.item}>
                <img src={'https://img3.goodfon.ru/wallpaper/nbig/3/51/avatar-neytiri-zoe-saldana-6192.jpg'}/>
                {props.message}
                <span>Like</span> {props.likeCount}
            </div>
    );
};

export default Post;