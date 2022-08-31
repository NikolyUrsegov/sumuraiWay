import {AppRootStateType} from "./redux-store";

export const getUsers = (state: AppRootStateType) => {
    return state.users.users
}
export const getUsersCount = (state: AppRootStateType) => {
    return state.users.usersCount
}
export const getUsersPageSize = (state: AppRootStateType) => {
    return state.users.pageSize
}
export const getUsersCurrentPage = (state: AppRootStateType) => {
    return state.users.currentPage
}
export const getUsersIsLoading = (state: AppRootStateType) => {
    return state.users.isLoading
}
export const getUsersIsFollowedProgress = (state: AppRootStateType) => {
    return state.users.isFollowedProgress
}
