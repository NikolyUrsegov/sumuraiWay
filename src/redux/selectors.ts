import {AppRootStateType} from "./redux-store";
import {createSelector} from "reselect";

const getUsersSelector = (state: AppRootStateType) => {
    return state.users.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users
})

const getUsersCountSelector = (state: AppRootStateType) => {
    return state.users.usersCount
}
export const getUsersCount = createSelector(getUsersCountSelector, (usersCount) => {
    return usersCount
})

const getUsersPageSizeSelector = (state: AppRootStateType) => {
    return state.users.pageSize
}
export const getUsersPageSize = createSelector(getUsersPageSizeSelector, (pageSize) => {
    return pageSize
})

const getUsersCurrentPageSelector = (state: AppRootStateType) => {
    return state.users.currentPage
}
export const getUsersCurrentPage = createSelector(getUsersCurrentPageSelector, (currentPage) => {
    return currentPage
})

const getUsersIsLoadingSelector = (state: AppRootStateType) => {
    return state.users.isLoading
}
export const getUsersIsLoading = createSelector(getUsersIsLoadingSelector, (isLoading) => {
    return isLoading
})

const getUsersIsFollowedProgressSelector = (state: AppRootStateType) => {
    return state.users.isFollowedProgress
}
export const getUsersIsFollowedProgress = createSelector(getUsersIsFollowedProgressSelector, (isFollowedProgress) => {
    return isFollowedProgress
})
