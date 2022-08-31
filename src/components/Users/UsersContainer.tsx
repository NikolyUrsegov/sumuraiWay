import React from "react";
import {connect} from "react-redux";
import {
    CurrentPageAC,
    followThunkCreate, getUsersThunkCreate, isFollowedProgressAC,
    SetUsersAC,
    unFollowThunkCreate,
    UserType
} from "../../redux/UsersReducer";
import {AppRootStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import WithAuthRedirectContainer from "../../hoc/WithAuthRedirectContainer";
import {compose} from "redux";
import {
    getUsers,
    getUsersCount,
    getUsersCurrentPage,
    getUsersIsFollowedProgress,
    getUsersIsLoading,
    getUsersPageSize
} from "../../redux/selectors";

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
    setCurrentPage: (currentPage: number) => void
    isFollowedProgress: (isFollowed: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void


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
        users: getUsers(state),
        usersCount: getUsersCount(state),
        pageSize: getUsersPageSize(state),
        currentPage: getUsersCurrentPage(state),
        isLoading: getUsersIsLoading(state),
        isFollowed: getUsersIsFollowedProgress(state)
    }
}


class UsersContainerAPI extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsers(page, this.props.pageSize)
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

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsers: SetUsersAC,
        setCurrentPage: CurrentPageAC,
        isFollowedProgress: isFollowedProgressAC,
        getUsers: getUsersThunkCreate,
        follow: followThunkCreate,
        unFollow: unFollowThunkCreate
    }),
    WithAuthRedirectContainer
)(UsersContainerAPI)


