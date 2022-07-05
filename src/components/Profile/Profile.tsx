import React from 'react';
import s from './Propfile.module.css'
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={s.content}>
           <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

export default Profile;