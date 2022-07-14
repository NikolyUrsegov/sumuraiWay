export type FriendType = {
    id: number
    name: string
    img: string
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostsDataType = {
    id: number
    post: string
    likeCount: number
}
export type StateType = {
    messages: {
        dialogsData: DialogType[]
        messagesData: MessageType[]
    }
    profile: {
        postsData: PostsDataType[]
        newTextPost: string
    }
    sidebar: {
        friends: FriendType[]
    }
}
type StoreType = {
    _state: StateType
    _addPost: (newPost: string) => void
    _updateTextPost: (newText: string) => void
    subscribe: (observer: () => void) => void
    _rerender: () => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = AddPostACType | UpdateTextPostACType

let store: StoreType = {
    _state: {
        messages: {
            dialogsData: [
                {id: 1, name: 'Kolya'},
                {id: 2, name: 'Petya'},
                {id: 3, name: 'Shasha'},
                {id: 4, name: 'Artem'},
                {id: 5, name: 'Vasya'},
                {id: 6, name: 'Kecha'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'hjk'},
                {id: 4, message: 'jkl'},
                {id: 5, message: 'ghj'},
                {id: 6, message: 'hjhjk'},
            ]
        },
        profile: {
            postsData: [
                {id: 1, post: 'Kolya', likeCount: 12},
                {id: 2, post: 'Petya', likeCount: 15},
                {id: 3, post: 'Shasha', likeCount: 111},
                {id: 4, post: 'Artem', likeCount: 17},
                {id: 5, post: 'Vasya', likeCount: 133},
                {id: 6, post: 'Kecha', likeCount: 1678}
            ],
            newTextPost: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Kolya',
                    img: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
                },
                {
                    id: 2,
                    name: 'Vasya',
                    img: 'https://uprostim.com/wp-content/uploads/2021/03/image056-90.jpg',
                },
                {
                    id: 3,
                    name: 'Nikita',
                    img: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg'
                }
            ]

        }
    },
    _rerender() {
    },
    _addPost(text) {
        let post = {
            id: this._state.profile.postsData.length + 1,
            post: text,
            likeCount: 0
        }
        this._state.profile.postsData.push(post)
        this._state.profile.newTextPost = ''
        this._rerender()
    },
    _updateTextPost(newText) {
        this._state.profile.newTextPost = newText
        this._rerender()
    },
    subscribe(observer) {
        this._rerender = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        switch (action.type) {
            case 'ADD-NEW-POST':
                this._addPost(action.text)
                break
            case 'UPDATE-TEXT-POST':
                this._updateTextPost(action.text)
                break
            default:
                alert('error')
        }
    }

}

type AddPostACType = ReturnType<typeof AddPostAC>
export const AddPostAC = (post: string) => {
    return ({
        type: 'ADD-NEW-POST',
        text: post
    }) as const
}

type UpdateTextPostACType = ReturnType<typeof UpdateTextPostAC>
export const UpdateTextPostAC = (newText: string) => {
    return ({
        type: 'UPDATE-TEXT-POST',
        text: newText
    }) as const
}

export default store;
