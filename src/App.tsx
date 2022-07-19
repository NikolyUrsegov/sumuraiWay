import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, StateType} from "./redux/state";
import DialogContainer from "./components/Dialogs/DialogContainer";
import {ReduxStore} from "./redux/redux-store";

type AppPropsType = {
    store: ReduxStore
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar sidebar={props.store.getState().sidebar}/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile'
                           render={() => <Profile store={props.store}/>}
                    />
                    <Route path="/dialog"
                           render={() => <DialogContainer store={props.store}/>}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
