import React from "react";
import {connect} from "react-redux";
import {
    CurrentPageAC,
    FollowAC, isFollowedProgressAC,
    SetUsersAC, toggleLoadingAC,
    UnFollowAC,
    UsersCountAC,
    UserType
} from "../../redux/UsersReducer";
import {AppRootStateType} from "../../redux/redux-store";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

type MapStateToPropsType = {
    users: UserType[]
    usersCount: number
    pageSize: number
    currentPage: number
    isLoading: boolean
    isFollowed: number[]

}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setUsersCount: (usersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsLoading: (isLoading: boolean) => void
    isFollowedProgress: (isFollowed: boolean, userId: number) => void

}
type UsersContainerPropsType = MapDispatchToPropsType & MapStateToPropsType
export type UsersPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (page: number) => void
    isFollowedProgress: (isFollowed: boolean, userId: number) => void
    users: UserType[]
    usersCount: number
    pageSize: number
    currentPage: number
    isFollowed: number[]

}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.users.users,
        usersCount: state.users.usersCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        isLoading: state.users.isLoading,
        isFollowed: state.users.isFollowedProgress
    }
}


class UsersContainerAPI extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsLoading(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                    this.props.toggleIsLoading(false)
                    this.props.setUsers(response.items)
                    this.props.setUsersCount(response.totalCount)
                }
            )
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsLoading(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                    this.props.toggleIsLoading(false)
                    this.props.setUsers(response.items)
                    this.props.setUsersCount(response.totalCount)
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
                             isFollowed={this.props.isFollowed}
                             isFollowedProgress={this.props.isFollowedProgress}
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
    toggleIsLoading: toggleLoadingAC,
    isFollowedProgress: isFollowedProgressAC
})(UsersContainerAPI)