import React from 'react';
import s from './Propfile.module.css'
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../App";

type ProfilePropsType ={
    postsData: PostsDataType[]
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
           <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
};

export default Profile;