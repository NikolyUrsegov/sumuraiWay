import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message='One post ' likeCount={0}/>
                <Post message='Two post ' likeCount={23}/>
                <Post message='Three post ' likeCount={23}/>
            </div>
        </div>
    );
};

export default MyPosts;