import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/NavBar";
import {Route} from "react-router-dom";
import {DialogContainer} from "./components/Dialogs/DialogContainer";
import {ReduxStore} from "./redux/redux-store";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";

type AppPropsType = {
    store: ReduxStore
}

function App(props: AppPropsType) {
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <NavBar sidebar={props.store.getState().sidebar}/>
            <div className={'app-wrapper-content'}>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}
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
