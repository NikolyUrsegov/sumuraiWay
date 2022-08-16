import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import messagesReducer from "./messagesReducer";
import ProfileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./authReducer";


let rootReducer = combineReducers({
    messages: messagesReducer,
    profile: ProfileReducer,
    sidebar: sidebarReducer,
    users: UsersReducer,
    auth: AuthReducer
})
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type ReduxStore = typeof store;
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;