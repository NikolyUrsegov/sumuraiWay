import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsDataType} from "../../../App";

type MyPostsPropsType = {
    postsData: PostsDataType[]
}

const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add new post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.postsData.map(el => (
                    <Post message={el.post} likeCount={el.likeCount} key={el.id}/>
                ))}
            </div>
        </div>
    );
};

export default MyPosts;