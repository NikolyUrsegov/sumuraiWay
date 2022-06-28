import React from 'react';
import s from './Propfile.module.css'
import MyPosts from "./MyPost/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img style={{width: '1000px'}}
                     src={'https://foto.krasnoturinsk.me/cpg/albums/userpics/10073/P1020597.jpg'}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;