export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    follow: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}

export type UsersStateType = {
    users: UserType[]
    usersCount: number
    pageSize: number
    currentPage: number
    isLoading: boolean
    isFollowedProgress: number[]
}

let initialState: UsersStateType = {
    users: [],
    usersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isLoading: false,
    isFollowedProgress: []
}

const UsersReducer = (state: UsersStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state, users: state.users.map(u => u.id === action.payload.userId
                    ? {...u, follow: true}
                    : u
                )
            }
        }
        case "UNFOLLOW": {
            return {
                ...state, users: state.users.map(u => u.id === action.payload.userId
                    ? {...u, follow: false}
                    : u
                )
            }
        }
        case "SET_USERS": {
            return {
                ...state, users: action.payload.users
            }
        }
        case "USERS_COUNT": {
            return {
                ...state,
                usersCount: action.payload.usersCount
            }
        }
        case "CURRENT_PAGE": {
            return {
                ...state, currentPage: action.payload.currentPage
            }
        }
        case "TOGGLE_IS_LOADING": {
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        }
        case "IS_FOLLOWED_PROGRESS": {
            return {
                ...state,
                isFollowedProgress: action.payload.isFollowed
                    ? [...state.isFollowedProgress, action.payload.userId]
                    : state.isFollowedProgress.filter(id => id != action.payload.userId)
            }
        }
        default:
            return state
    }
}

type ActionsTypes =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | UsersCountACType
    | CurrentPageACType
    | toggleLoadingACType
    | isFollowedProgressACType
type FollowACType = ReturnType<typeof FollowAC>
type UnFollowACType = ReturnType<typeof UnFollowAC>
type isFollowedProgressACType = ReturnType<typeof isFollowedProgressAC>
type SetUsersACType = ReturnType<typeof SetUsersAC>
type UsersCountACType = ReturnType<typeof UsersCountAC>
type CurrentPageACType = ReturnType<typeof CurrentPageAC>
type toggleLoadingACType = ReturnType<typeof toggleLoadingAC>


export const FollowAC = (userId: number) => {
    return ({
        type: 'FOLLOW',
        payload: {
            userId
        }
    }) as const
}
export const UnFollowAC = (userId: number) => {
    return ({
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    }) as const
}
export const isFollowedProgressAC = (isFollowed: boolean, userId: number) => {
    return ({
        type: 'IS_FOLLOWED_PROGRESS',
        payload: {
            userId,
            isFollowed
        }
    }) as const
}
export const SetUsersAC = (users: UserType[]) => {
    return ({
        type: 'SET_USERS',
        payload: {
            users
        }
    }) as const
}
export const UsersCountAC = (usersCount: number) => {
    return ({
        type: 'USERS_COUNT',
        payload: {
            usersCount: usersCount
        }
    }) as const
}
export const CurrentPageAC = (currentPage: number) => {
    return ({
        type: 'CURRENT_PAGE',
        payload: {
            currentPage: currentPage
        }
    }) as const
}
export const toggleLoadingAC = (isLoading: boolean) => {
    return ({
        type: 'TOGGLE_IS_LOADING',
        payload: {
            isLoading: isLoading
        }
    }) as const
}

export default UsersReducer;