import React from 'react';
import {AddPostAC, PostsDataType} from "../../../redux/profileReducer";
import {AppRootStateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

export type  mapStatePropsType = {
    postsData: PostsDataType[]
}
export type mapDispatchPropsType = {
    addNewPost: (body: string) => void
}

const mapStateToProps = (state: AppRootStateType): mapStatePropsType => {
    return {
        postsData: state.profile.postsData
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addNewPost: (body: string) => {
            dispatch(AddPostAC(body))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

