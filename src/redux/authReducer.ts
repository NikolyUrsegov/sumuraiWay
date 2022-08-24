import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {DataLoginType} from "../components/Login/Login";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

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
                data: {...action.payload.data},
                isAuth: action.payload.isAuth
            }
        }
        default:
            return state
    }
}

type ActionsTypes = SetAuthUserDataACType
type SetAuthUserDataACType = ReturnType<typeof SetAuthUserDataAC>

export const SetAuthUserDataAC = (data: DataType, isAuth: boolean) => {
    return ({
        type: 'SET_AUTH_USER_DATA',
        payload: {
            data,
            isAuth
        }
    }) as const
}
export const setAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.getAuth()
        .then(response => {
                if (response.resultCode === 0) {
                    dispatch(SetAuthUserDataAC(response.data, true))
                }
            }
        )
}
export const loginUserDataTC = (dataLogin: DataLoginType) => (dispatch: AppThunk) => {
    authAPI.login(dataLogin.email, dataLogin.password, dataLogin.rememberMe).then(res => {
        if (res.resultCode === 0) {
            dispatch(setAuthUserDataTC())
        }else{
            console.log(res.messages[0] )
            dispatch(stopSubmit('login', {_error: res.messages[0]} ))
        }
    })
}

export const logoutUserDataTC = () => (dispatch: AppThunk) => {
    authAPI.logout().then(res => {
        if (res.resultCode === 0) {
            dispatch(SetAuthUserDataAC({id: null, email: null, login: null}, false))
        }
    })
}
export default AuthReducer;