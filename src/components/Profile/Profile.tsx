import React from 'react';
import s from './Propfile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPost/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateUserProfileStatus={props.updateUserProfileStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;