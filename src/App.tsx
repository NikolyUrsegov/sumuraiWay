import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/NavBar";
import {Route, withRouter} from "react-router-dom";
import {DialogContainer} from "./components/Dialogs/DialogContainer";
import {AppRootStateType, ReduxStore} from "./redux/redux-store";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializedAppTC} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

type AppPropsType = {
    store: AppRootStateType
    initialized: boolean
    initializedApp: () => void
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        return !this.props.initialized
            ? <Preloader/>
            : (<div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <NavBar sidebar={this.props.store.sidebar}/>
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
                        <Route path="/login"
                               render={() => <Login/>}
                        />
                    </div>
                </div>
            );
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        initialized: state.app.initialized,
        store: state
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {
        initializedApp: initializedAppTC
    })
)(App);
