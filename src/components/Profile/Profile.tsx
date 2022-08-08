import React from 'react';
import s from './Propfile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPost/MyPostsContainer";
import {ProfileUserType} from "../../redux/profileReducer";

const Profile = (props: {profile: ProfileUserType | null }) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;