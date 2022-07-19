import React from 'react';
import {AddPostAC, UpdateTextPostAC} from "../../../redux/profileReducer";
import {ReduxStore} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";


type MyPostsContainerPropsType = {
    store: ReduxStore
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let state = props.store.getState().profile
    const addNewPost = () => {
        props.store.dispatch(AddPostAC())
    }
    const changeNewTextPost = (newText: string) => {
        props.store.dispatch(UpdateTextPostAC(newText))
    }
    return (
        <>
            <MyPosts
                postsData={state.postsData}
                newTextPost={state.newTextPost}
                addNewPost={addNewPost}
                changeNewTextPost={changeNewTextPost}
            />
        </>
    );
};

export default MyPostsContainer;