import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import MyFriends from "./MyFriends/MyFriends";
import {FriendType} from "../../redux/sidebarReducer";

type NavBarPropsType = {
    sidebar: {
        friends: FriendType[]
    }
}
const NavBar = (props: NavBarPropsType) => {
    return (<>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/dialog'} activeClassName={s.active}>Dialog</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/users'} activeClassName={s.active}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <a>News</a>
                </div>
                <div className={s.item}>
                    <a>Music</a>
                </div>
                <div className={s.item}>
                    <a>Setting</a>
                </div>
                <MyFriends friends={props.sidebar.friends}/>
            </nav>

        </>
    );
};

export default NavBar;