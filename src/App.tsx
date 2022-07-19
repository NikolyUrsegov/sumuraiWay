import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar sidebar={props.state.sidebar}/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile'
                           render={() => <Profile
                               postsData={props.state.profile.postsData}
                               newTextPost={props.state.profile.newTextPost}
                               dispatch={props.dispatch}
                           />}
                    />
                    <Route path="/dialog"
                           render={() => <Dialogs
                               messagesData={props.state.messages.messagesData}
                               dialogsData={props.state.messages.dialogsData}
                               newMessageText={props.state.messages.newMessageText}
                               dispatch={props.dispatch}
                           />}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
