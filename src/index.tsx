import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {DialogType, MessageType, PostsDataType} from './App';

let dialogsDate: DialogType[] = [
    {id: 1, name: 'Kolya'},
    {id: 2, name: 'Petya'},
    {id: 3, name: 'Shasha'},
    {id: 4, name: 'Artem'},
    {id: 5, name: 'Vasya'},
    {id: 6, name: 'Kecha'},
]
let messagesDate: MessageType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'hjk'},
    {id: 4, message: 'jkl'},
    {id: 5, message: 'ghj'},
    {id: 6, message: 'hjhjk'},
]
let postsDate: PostsDataType[] = [
    {id: 1, post: 'Kolya', likeCount: 12},
    {id: 2, post: 'Petya', likeCount: 15},
    {id: 3, post: 'Shasha', likeCount: 111},
    {id: 4, post: 'Artem', likeCount: 17},
    {id: 5, post: 'Vasya',likeCount: 133},
    {id: 6, post: 'Kecha', likeCount: 1678}
]

ReactDOM.render(
    <App dialogsDate={dialogsDate} messagesData={messagesDate} postsData={postsDate}/>,
  document.getElementById('root')
);