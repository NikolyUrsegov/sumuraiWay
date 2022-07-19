import React from 'react';
import Friend from "./Friend/Friend";
import s from './MyFriends.module.css'
import {FriendType} from "../../../redux/sidebarReducer";

type MyFriendsPropsType = {
    friends: FriendType[]
}

const MyFriends = (props: MyFriendsPropsType) => {
    return (
        <div>
            <h3>Friends</h3>
            <div className={s.friendsBlock}>
                {props.friends.map(el => (
                    <Friend img={el.img} name={el.name} id={el.id} key={el.id}/>
                ))}
            </div>
        </div>
    );
};

export default MyFriends;