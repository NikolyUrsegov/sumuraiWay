import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {DialogType, MessageType, PostsDataType} from './App';
import state from './redux/state'

ReactDOM.render(
    <App dialogsState={state.messages} profileState={state.profile} sidebarState={state.sidebar}/>,
    document.getElementById('root')
);