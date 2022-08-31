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
}

const messagesReducer = (state: MessagesType = messages, action: ActionMessagesTypes) => {
    switch (action.type) {
        case 'SEND-NEW-MESSAGE': {
            let id = state.messagesData.length + 1
            let newMessage = {id: id, message: action.body}
            let stateCopy: MessagesType = {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
            return stateCopy
        }
        default:
            return state
    }
}

export type ActionMessagesTypes =  SendNewMessageACType
type SendNewMessageACType = ReturnType<typeof SendNewMessageAC>


export const SendNewMessageAC = (newText: string) => {
    return ({
        type: 'SEND-NEW-MESSAGE',
        body: newText
    }) as const
}
export default messagesReducer;