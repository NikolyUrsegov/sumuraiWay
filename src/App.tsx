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

type AppPropsType ={
    dialogsDate: DialogType[]
    messagesData: MessageType[]
    postsData: PostsDataType[]
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    {/*<Profile/>*/}
                    <Route path='/profile' render={() => <Profile postsData={props.postsData}/>}/>
                    <Route path="/dialog" render={() => <Dialogs messagesData={props.messagesData} dialogsData={props.dialogsDate}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
