import {ActionsTypes, ProfileType} from "./state";
let profile = {
    postsData: [
        {id: 1, post: 'Kolya', likeCount: 12},
        {id: 2, post: 'Petya', likeCount: 15},
        {id: 3, post: 'Shasha', likeCount: 111},
        {id: 4, post: 'Artem', likeCount: 17},
        {id: 5, post: 'Vasya', likeCount: 133},
        {id: 6, post: 'Kecha', likeCount: 1678}
    ],
        newTextPost: ''
}

const profileReducer = (state: ProfileType = profile, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-NEW-POST':
            let post = {
                id: state.postsData.length + 1,
                post: state.newTextPost,
                likeCount: 0
            }
            state.postsData.push(post)
            state.newTextPost = ''
            return state
        case 'UPDATE-TEXT-POST':
            state.newTextPost = action.text
            return state
        default:
            return state
    }
}
export const AddPostAC = (post: string) => {
    return ({
        type: 'ADD-NEW-POST',
        text: post
    }) as const
}
export const UpdateTextPostAC = (newText: string) => {
    return ({
        type: 'UPDATE-TEXT-POST',
        text: newText
    }) as const
}

export default profileReducer;