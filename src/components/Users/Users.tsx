import React from 'react';
import s from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";

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
                    <span
                        className={props.currentPage === p ? s.activePage : ''}
                        onClick={() => props.onPageChanged(p)}
                    >{p}__</span>)}
            </div>
            {props.users.map(u =>
                <div className={s.usersBlock} key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos.small} className={s.photo}/>
                        </div>
                        <div>
                            {u.follow
                                ? <button onClick={() => props.unFollow(u.id)}>Follow</button>
                                : <button onClick={() => props.follow(u.id)}>Unfollow</button>}
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