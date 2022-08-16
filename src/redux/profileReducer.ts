import {profileAPI} from "../api/api";
import {Dispatch} from "redux";

export type PostsDataType = {
    id: number
    post: string
    likeCount: number
}
export type ProfileUserType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos:{
        small: string
        large: string
    }
}
export type ProfileType = {
    postsData: PostsDataType[]
    newTextPost: string
    profileUser: ProfileUserType | null
    status: string
}


let profile: ProfileType = {
    postsData: [
        {id: 1, post: 'Kolya', likeCount: 12},
        {id: 2, post: 'Petya', likeCount: 15},
        {id: 3, post: 'Shasha', likeCount: 111},
        {id: 4, post: 'Artem', likeCount: 17},
        {id: 5, post: 'Vasya', likeCount: 133},
        {id: 6, post: 'Kecha', likeCount: 1678}
    ],
    newTextPost: '',
    profileUser: null,
    status: ''
}

const profileReducer = (state: ProfileType = profile, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-NEW-POST': {
            let newPost = {
                id: state.postsData.length + 1,
                post: state.newTextPost,
                likeCount: 0
            }
            let stateCopy: ProfileType = {
                ...state,
                postsData: [...state.postsData, newPost],
                newTextPost: ''
            }
            return stateCopy
        }
        case 'UPDATE-TEXT-POST': {
            let stateCopy: ProfileType = {...state, newTextPost: action.text}
            return stateCopy
        }
        case "SET_USER_PROFILE": {
            return {
                ...state,
                profileUser: action.profile
            }
        }
        case "SET_USER_PROFILE_STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

type ActionsTypes = AddPostACType | UpdateTextPostACType | SetUserProfileACType | SetUserProfileStatusACType
type AddPostACType = ReturnType<typeof AddPostAC>
type UpdateTextPostACType = ReturnType<typeof UpdateTextPostAC>
type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
type SetUserProfileStatusACType = ReturnType<typeof setUserProfileStatusAC>

export const AddPostAC = () => {
    return ({
        type: 'ADD-NEW-POST',
    }) as const
}
export const UpdateTextPostAC = (newText: string) => {
    return ({
        type: 'UPDATE-TEXT-POST',
        text: newText
    }) as const
}
export const setUserProfileAC = (profile: ProfileUserType) => {
    return ({
        type: 'SET_USER_PROFILE',
        profile
    }) as const
}
export const setUserProfileStatusAC = (status: string) => {
    return ({
        type: 'SET_USER_PROFILE_STATUS',
        status
    }) as const
}

export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    if (!userId) userId = '24899'
    profileAPI.getProfileUser(userId)
        .then(response => {
                dispatch(setUserProfileAC(response.data))
            }
        )
}
export const getUserProfileStatusTC = (userId: string) => (dispatch: Dispatch) => {
    if (!userId) userId = '24899'
    profileAPI.getProfileStatus(userId)
        .then(response => {
                dispatch(setUserProfileStatusAC(response.data))
            }
        )
}
export const updateUserProfileStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.putProfileStatus(status)
        .then(response => {
            response.data.resultCode === 0 && dispatch(setUserProfileStatusAC(status))
            }
        )
}


export default profileReducer;


