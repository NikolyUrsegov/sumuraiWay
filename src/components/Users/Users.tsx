import React from 'react';
import s from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";

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
                                ? <button disabled={props.isFollowed.some(id => id === u.id)} onClick={() => {
                                    props.isFollowedProgress(true, u.id)
                                    userAPI.postFollowUser(u.id)
                                        .then(response => {
                                                if (response.resultCode === 0) props.unFollow(u.id)
                                                props.isFollowedProgress(false, u.id)

                                            }
                                        )
                                }
                                }>Follow</button>
                                : <button disabled={props.isFollowed.some(id => id === u.id)} onClick={() => {
                                    props.isFollowedProgress(true, u.id)
                                    userAPI.deleteUnFollowUser(u.id)
                                        .then(response => {
                                                if (response.resultCode === 0) props.follow(u.id)
                                                props.isFollowedProgress(false, u.id)
                                            }
                                        )
                                }
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