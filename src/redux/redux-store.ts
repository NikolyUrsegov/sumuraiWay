import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import messagesReducer from "./messagesReducer";
import ProfileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form'


let rootReducer = combineReducers({
    messages: messagesReducer,
    profile: ProfileReducer,
    sidebar: sidebarReducer,
    users: UsersReducer,
    auth: AuthReducer,
    form: formReducer
})
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type ReduxStore = typeof store;
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunk = ThunkDispatch<AppRootStateType, unknown, AnyAction>


// @ts-ignore
window.store = store;