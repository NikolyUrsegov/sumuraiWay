import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {DialogContainer} from "./components/Dialogs/DialogContainer";
import {ReduxStore} from "./redux/redux-store";
import {UsersContainer} from "./components/Users/UsersContainer";

type AppPropsType = {
    store: ReduxStore
}

function App(props: AppPropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar sidebar={props.store.getState().sidebar}/>
            <div className={'app-wrapper-content'}>
                <Route path='/profile'
                       render={() => <Profile/>}
                />
                <Route path="/dialog"
                       render={() => <DialogContainer/>}
                />
                <Route path="/users"
                       render={() => <UsersContainer/>}
                />
            </div>
        </div>
    );
}

export default App;
