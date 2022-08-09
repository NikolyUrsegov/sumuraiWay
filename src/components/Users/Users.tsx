import React from 'react';
import s from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props: UsersPropsType) => {
    let pages = []
    let numberPages = Math.ceil(props.usersCount / props.pageSize)
    for (let i = 1; i <= numberPages; i++) {
        pages.push(i)
    }
    return (
        <>
            <div>
                {pages.map(p =>
                    <span key={p}
                          className={props.currentPage === p ? s.activePage : ''}
                          onClick={() => props.onPageChanged(p)}
                    >{p}__</span>)}
            </div>
            {props.users.map(u =>
                <div className={s.usersBlock} key={u.id}>
                    <div>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small} className={s.photo}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.follow
                                ? <button onClick={() =>
                                    axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '76071dac-8587-4f30-adbf-68dc70edaed2'
                                            }
                                        })
                                        .then(response => {
                                                if (response.data.resultCode === 0)
                                                    props.unFollow(u.id)
                                            }
                                        )
                                }>Follow</button>
                                : <button onClick={() =>
                                    axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '76071dac-8587-4f30-adbf-68dc70edaed2'
                                            }
                                        })
                                        .then(response => {
                                                if (response.data.resultCode === 0)
                                                    props.follow(u.id)
                                            }
                                        )
                                }>Unfollow</button>}
                        </div>
                    </div>
                    <div>
                        <h3>{u.name}</h3>
                        <p>{u.status}</p>
                        <span>{'u.location.city'}</span>
                        <span>{'u.location.country'}</span>
                    </div>
                </div>
            )
            }
        </>
    );
};

export default Users;