import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    {/*<Profile/>*/}
                    <Route path='/profile' component={Profile}/>
                    <Route path="/dialog" component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
