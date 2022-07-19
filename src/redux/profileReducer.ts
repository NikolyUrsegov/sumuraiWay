export type PostsDataType = {
    id: number
    post: string
    likeCount: number
}
export type ProfileType = {
    postsData: PostsDataType[]
    newTextPost: string
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
    newTextPost: ''
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
        default:
            return state
    }
}

type ActionsTypes = AddPostACType | UpdateTextPostACType
type AddPostACType = ReturnType<typeof AddPostAC>
type UpdateTextPostACType = ReturnType<typeof UpdateTextPostAC>

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

export default profileReducer;