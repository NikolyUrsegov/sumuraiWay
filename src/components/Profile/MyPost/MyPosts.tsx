import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, PostsDataType, AddPostAC, UpdateTextPostAC} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: PostsDataType[]
    newTextPost: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    let newPostRef = React.createRef<HTMLTextAreaElement>()
    const addNewPost = () => {
     props.dispatch(AddPostAC(props.newTextPost))
    }
    const onPostChange = () => {
        let newText = newPostRef.current? newPostRef.current?.value : ''
        props.dispatch(UpdateTextPostAC(newText))
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostRef} value={props.newTextPost}/>
                </div>
                <div>
                    <button onClick={addNewPost}>Add new post</button>
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