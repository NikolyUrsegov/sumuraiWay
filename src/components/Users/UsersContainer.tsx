import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    CurrentPageAC,
    FollowAC,
    SetUsersAC,
    UnFollowAC,
    UsersCountAC,
    UserType
} from "../../redux/UsersReducer";
import {AppRootStateType} from "../../redux/redux-store";
import axios from "axios";
import Users from "./Users";

type MapStateToPropsType = {
    users: UserType[]
    usersCount: number
    pageSize: number
    currentPage: number
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setUsersCount: (usersCount: number) => void
    setCurrentPage: (currentPage: number) => void
}
export type UsersContainerPropsType = MapDispatchToPropsType & MapStateToPropsType
export type UsersPropsType = MapStateToPropsType & {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (page: number) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.users.users,
        usersCount: state.users.usersCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(FollowAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(SetUsersAC(users))
        },
        setUsersCount: (usersCount: number) => {
            dispatch(UsersCountAC(usersCount))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(CurrentPageAC(currentPage))
        }
    }
}

class UsersContainerAPI extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            }
        )
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            }
        )
    }

    render() {
        return (<Users users={this.props.users}
                       usersCount={this.props.usersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       onPageChanged={this.onPageChanged}/>)
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)