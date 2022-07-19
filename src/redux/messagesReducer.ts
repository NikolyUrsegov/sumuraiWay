export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type MessagesType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageText: string
}
let messages: MessagesType = {
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
}

const messagesReducer = (state: MessagesType = messages, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            let stateCopy: MessagesType = {...state, newMessageText: action.body}
            return stateCopy
        }
        case 'SEND-NEW-MESSAGE': {
            let id = state.messagesData.length + 1
            let newMessage = {id: id, message: state.newMessageText}
            let stateCopy: MessagesType = {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }
            return stateCopy
        }
        default:
            return state
    }
}

type ActionsTypes = UpdateTextMessageACType | SendNewMessageACType
type UpdateTextMessageACType = ReturnType<typeof UpdateTextMessageAC>
type SendNewMessageACType = ReturnType<typeof SendNewMessageAC>

export const UpdateTextMessageAC = (newText: string) => {
    return ({
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        body: newText
    }) as const
}
export const SendNewMessageAC = () => {
    return ({
        type: 'SEND-NEW-MESSAGE',
    }) as const
}
export default messagesReducer;