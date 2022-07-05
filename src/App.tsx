import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostsDataType = {
    id: number
    post: string
    likeCount: number
}
export type FriendType = {
    img: string,
    name: string,
    id: number
}

type AppPropsType = {
    dialogsState: {
        dialogsData: DialogType[],
        messagesData: MessageType[]
    }
    profileState: {
        postsData: PostsDataType[]
    }
    sidebarState: {
        friends: FriendType[]
    }
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar sidebar={props.sidebarState}/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile'
                           render={() => <Profile postsData={props.profileState.postsData}/>}/>
                    <Route path="/dialog"
                           render={() => <Dialogs messagesData={props.dialogsState.messagesData}
                                                  dialogsData={props.dialogsState.dialogsData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
