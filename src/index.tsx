import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./redux/redux-store";

export const rerender = () => {
    ReactDOM.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    )
    ;
}
rerender();
store.subscribe(rerender)