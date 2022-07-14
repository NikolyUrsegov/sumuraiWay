import React from 'react';
import s from './Propfile.module.css'
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsDataType} from "../../redux/state";

type ProfilePropsType = {
    postsData: PostsDataType[]
    newTextPost: string
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                postsData={props.postsData}
                newTextPost={props.newTextPost}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;