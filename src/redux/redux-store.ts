import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import messagesReducer, {ActionMessagesTypes} from "./messagesReducer";
import ProfileReducer, {ActionProfileTypes} from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import UsersReducer, {ActionUsersTypes} from "./UsersReducer";
import AuthReducer, {ActionAuthTypes} from "./authReducer";
import { reducer as formReducer } from 'redux-form'
import appReducer, {ActionAppTypes} from "./appReducer";


let rootReducer = combineReducers({
    messages: messagesReducer,
    profile: ProfileReducer,
    sidebar: sidebarReducer,
    users: UsersReducer,
    auth: AuthReducer,
    app: appReducer,
    form: formReducer
})
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type ReduxStore = typeof store;
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunk = ThunkDispatch<AppRootStateType, unknown, ActionsType>
export type AppDispatch<ReturnType = void> = ThunkAction<ReturnType,AppRootStateType,unknown,ActionsType>;


type ActionsType = ActionAuthTypes | ActionMessagesTypes | ActionProfileTypes | ActionUsersTypes | ActionAppTypes


// @ts-ignore
window.store = store;