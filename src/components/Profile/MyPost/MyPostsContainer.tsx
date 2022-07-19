import React from 'react';
import {AddPostAC, PostsDataType, UpdateTextPostAC} from "../../../redux/profileReducer";
import {AppRootStateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

export type  mapStatePropsType = {
    postsData: PostsDataType[]
    newTextPost: string
}
export type mapDispatchPropsType = {
    addNewPost: () => void
    changeNewTextPost: (newText: string) => void
}

const mapStateToProps = (state: AppRootStateType): mapStatePropsType => {
    return {
        postsData: state.profile.postsData,
        newTextPost: state.profile.newTextPost
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addNewPost: () => {
            dispatch(AddPostAC())
        },
        changeNewTextPost: (newText: string) => {
            dispatch(UpdateTextPostAC(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

