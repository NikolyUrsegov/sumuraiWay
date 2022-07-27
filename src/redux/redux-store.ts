import {combineReducers, createStore} from "redux";
import messagesReducer from "./messagesReducer";
import ProfileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import UsersReducer from "./UsersReducer";


let rootReducer = combineReducers({
    messages: messagesReducer,
    profile: ProfileReducer,
    sidebar: sidebarReducer,
    users: UsersReducer
})
export let store = createStore(rootReducer)

export type ReduxStore = typeof store;
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;