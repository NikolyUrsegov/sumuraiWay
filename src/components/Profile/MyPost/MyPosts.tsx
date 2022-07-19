import React, {ChangeEvent} from 'react';
import { PostsDataType } from '../../../redux/profileReducer';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type MyPostsPropsType = {
    postsData: PostsDataType[]
    newTextPost: string
    changeNewTextPost: (newText: string) => void
    addNewPost: () => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const addNewPost = () => {
        props.addNewPost()
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let newText = e.currentTarget.value
        props.changeNewTextPost(newText)

    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newTextPost}/>
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