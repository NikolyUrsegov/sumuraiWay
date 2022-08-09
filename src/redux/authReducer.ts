export type DataType = {
    id: number | null
    email: string | null
    login: string | null
}
export type AuthType = { data: DataType, isAuth: boolean }
let auth: AuthType = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false
}

const AuthReducer = (state: AuthType = auth, action: ActionsTypes) => {
    switch (action.type) {
        case 'SET_AUTH_USER_DATA': {
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }
        }
        default:
            return state
    }
}

type ActionsTypes = SetAuthUserDataACType
type SetAuthUserDataACType = ReturnType<typeof SetAuthUserDataAC>

export const SetAuthUserDataAC = (data: DataType) => {
    return ({
        type: 'SET_AUTH_USER_DATA',
        data
    }) as const
}
export default AuthReducer;