import React, {ChangeEvent} from 'react';
import { PostsDataType } from '../../../redux/profileReducer';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostsPropsType = {
    postsData: PostsDataType[]
    addNewPost: (body: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const addNewPost = (dataForm: PostFormDataType) => {
        props.addNewPost(dataForm.post)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <PostReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {props.postsData.map(el => (
                    <Post message={el.post} likeCount={el.likeCount} key={el.id}/>
                ))}
            </div>
        </div>
    );
};

type PostFormDataType = {
    post: string
}

const PostForm = (props: InjectedFormProps<PostFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'post'} placeholder={'...Post'}/>
            </div>
            <div>
                <button >SEND</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm<PostFormDataType>({form: 'post'})(PostForm)

export default MyPosts;