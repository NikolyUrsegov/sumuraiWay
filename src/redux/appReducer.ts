import {AppThunk} from "./redux-store";
import {setAuthUserDataTC} from "./authReducer";


export type AppType = {
    initialized: boolean
}
let initial: AppType = {
    initialized: false
}

const appReducer = (state: AppType = initial, action: ActionAppTypes) => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export type ActionAppTypes = initializedSuccessACType
type initializedSuccessACType = ReturnType<typeof initializedSuccessAC>

export const initializedSuccessAC = () => {
    return ({
        type: 'INITIALIZED_SUCCESS'
    }) as const
}

export const initializedAppTC = ():AppThunk => (dispatch:any) => {
    dispatch(setAuthUserDataTC()).then( () => {
        dispatch(initializedSuccessAC())
    })
}

export default appReducer;