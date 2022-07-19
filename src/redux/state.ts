import profileReducer, {AddPostAC, UpdateTextPostAC} from "./profileReducer";
import messagesReducer, {SendNewMessageAC, UpdateTextMessageAC} from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";

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
export type ProfileType = {
    postsData: PostsDataType[]
    newTextPost: string
}
export type MessagesType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageText: string
}
export type SidebarType = {
    friends: FriendType[]

}
export type StateType = {
    messages: MessagesType
    profile: ProfileType
    sidebar: SidebarType
}
type StoreType = {
    _state: StateType
    _rerender: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = AddPostACType | UpdateTextPostACType | UpdateTextMessageACType | SendNewMessageACType

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
            ],
            newMessageText: ''
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
    subscribe(observer) {
        this._rerender = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.messages = messagesReducer(this._state.messages, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._rerender()
    }

}
type AddPostACType = ReturnType<typeof AddPostAC>
type UpdateTextPostACType = ReturnType<typeof UpdateTextPostAC>
type UpdateTextMessageACType = ReturnType<typeof UpdateTextMessageAC>
type SendNewMessageACType = ReturnType<typeof SendNewMessageAC>

export default store;
