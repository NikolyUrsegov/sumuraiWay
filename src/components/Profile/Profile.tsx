import React from 'react';
import s from './Propfile.module.css'
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsDataType} from "../../redux/state";
import {ReduxStore} from "../../redux/redux-store";
import MyPostsContainer from "./MyPost/MyPostsContainer";

type ProfilePropsType = {
    store: ReduxStore
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;