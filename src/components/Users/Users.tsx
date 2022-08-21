import React from 'react';
import s from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";

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
                            {u.followed
                                ? <button disabled={props.isFollowed.some(id => id === u.id)} onClick={() => {
                                   props.unFollow(u.id)
                                }
                                }>Unfollow</button>
                                : <button disabled={props.isFollowed.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                }
                                }>Follow</button>
                            }
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