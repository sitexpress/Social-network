type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: string
    photos: string
    followed: boolean
    name: string
    status: string
    location: LocationType
}

export type MainInitType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initial: MainInitType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

export const usersReducer = (state: MainInitType = initial, action: MainUsersActionType): MainInitType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        case "SET_USERS":
            return {
                ...state, users: action.users
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET_TOTAL_COUNT":
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}


export type MainUsersActionType =
    followACType
    | unFollowACType
    | setUsersACType
    | setCurrentPageACACType
    | setTotalCountACType
    | setToggleACType

export type followACType = ReturnType<typeof follow>
export const follow = (userId: string) => {
    return {type: 'FOLLOW', userId} as const
}

export type unFollowACType = ReturnType<typeof unFollow>
export const unFollow = (userId: string) => {
    return {type: 'UNFOLLOW', userId} as const
}

export type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UsersType[]) => {
    return {type: 'SET_USERS', users} as const
}

export type setCurrentPageACACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {type: 'SET_CURRENT_PAGE', currentPage} as const
}

export type setTotalCountACType = ReturnType<typeof setTotalCount>
export const setTotalCount = (totalCount: number) => {
    return {type: 'SET_TOTAL_COUNT', totalCount} as const
}

export type setToggleACType = ReturnType<typeof setToggle>
export const setToggle = (isFetching: boolean) => {
    return {type: 'TOGGLE-IS-FETCHING', isFetching} as const
}

