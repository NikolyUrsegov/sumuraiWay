import React from "react";
import {connect} from "react-redux";
import {
    CurrentPageAC,
    FollowAC,
    SetUsersAC, toggleLoadingAC,
    UnFollowAC,
    UsersCountAC,
    UserType
} from "../../redux/UsersReducer";
import {AppRootStateType} from "../../redux/redux-store";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

type MapStateToPropsType = {
    users: UserType[]
    usersCount: number
    pageSize: number
    currentPage: number
    isLoading: boolean

}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setUsersCount: (usersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsLoading: (isLoading: boolean) => void
}
type UsersContainerPropsType = MapDispatchToPropsType & MapStateToPropsType
export type UsersPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (page: number) => void
    users: UserType[]
    usersCount: number
    pageSize: number
    currentPage: number
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.users.users,
        usersCount: state.users.usersCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        isLoading: state.users.isLoading

    }
}


class UsersContainerAPI extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                    this.props.toggleIsLoading(false)
                    this.props.setUsers(response.data.items)
                    this.props.setUsersCount(response.data.totalCount)
                }
            )
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.toggleIsLoading(false)
                    this.props.setUsers(response.data.items)
                    this.props.setUsersCount(response.data.totalCount)
                }
            )
    }

    render() {
        return (
            <>
                {this.props.isLoading
                    ? <Preloader/>
                    : <Users users={this.props.users}
                             usersCount={this.props.usersCount}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             follow={this.props.follow}
                             unFollow={this.props.unFollow}
                             onPageChanged={this.onPageChanged}
                    />}
            </>
        )
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow: FollowAC,
    unFollow: UnFollowAC,
    setUsers: SetUsersAC,
    setUsersCount: UsersCountAC,
    setCurrentPage: CurrentPageAC,
    toggleIsLoading: toggleLoadingAC
})(UsersContainerAPI)