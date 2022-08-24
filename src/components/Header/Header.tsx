import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://w7.pngwing.com/pngs/477/1005/png-transparent-user-computer-icons-logo-others-service-logo-computer-wallpaper.png'/>
            <div className={s.loginBlock}>{
                !props.login
                    ? <NavLink to={'/login'}>
                        Login
                    </NavLink>
                    : <div>
                        <button onClick={() => props.logout()}>logout</button>
                        <span>{props.login}</span>
                    </div>
            }
            </div>


        </header>
    );
};

export default Header;