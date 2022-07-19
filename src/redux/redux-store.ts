import {combineReducers, createStore} from "redux";
import messagesReducer from "./messagesReducer";
import ProfileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let rootReducer = combineReducers({
    messages: messagesReducer,
    profile: ProfileReducer,
    sidebar: sidebarReducer
})
export let store = createStore(rootReducer)

export type ReduxStore = typeof store;
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;