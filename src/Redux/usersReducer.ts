import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
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
    isFollowingInProgress: Array<number>
}

const initial: MainInitType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: []
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
        case "TOGGLE-FOLLOWING-IN-PROGRESS":
            console.log('reducer',typeof action.id)
            return {
                ...state,
                    isFollowingInProgress: action.isFetching
                        ? [...state.isFollowingInProgress, action.id]
                        : state.isFollowingInProgress.filter(el => el !== action.id )
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
    | setFollowingInProgressACType

export type followACType = ReturnType<typeof follow>
export const follow = (userId: number) => {
    return {type: 'FOLLOW', userId} as const
}

export type unFollowACType = ReturnType<typeof unFollow>
export const unFollow = (userId: number) => {
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

export type setFollowingInProgressACType = ReturnType<typeof setFollowingInProgress>
export const setFollowingInProgress = (id: number, isFetching:boolean) => {
    return {type: 'TOGGLE-FOLLOWING-IN-PROGRESS', id, isFetching} as const
}


export const getUsersThunkCreator = (currentPage:number, pageSize:number) => {
    return (dispatch:Dispatch) => {
        dispatch(setToggle(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {

            dispatch(setToggle(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
        })
    }
}

export const onPageChangeThunkCreator = (p:number, pageSize:number) => {
    return (dispatch:Dispatch) => {
        dispatch(setCurrentPage(p))
        dispatch(setToggle(true))

        usersAPI.getUsers(p, pageSize).then(data => {
            dispatch(setToggle(false))
            dispatch(setUsers(data.items))
        })
    }
}

export const unfollowThunkCreator = (userId:number) => {
    return (dispatch:Dispatch) => {
        dispatch(setFollowingInProgress(userId, true))
        usersAPI.acceptUnfollow(userId)
            .then(resp => {
                if (resp.data.resultCode == 0) {
                    dispatch(unFollow(userId))
                    dispatch(setFollowingInProgress(userId, false))
                } else {
                    console.log('Something went wrong')
                }
            })
    }
}

export const followThunkCreator = (userId:number) => {
    return (dispatch:Dispatch) => {
        dispatch(setFollowingInProgress(userId, true))
        usersAPI.acceptFollow(userId)
            .then(resp => {
                if (resp.data.resultCode == 0) {
                    dispatch(follow(userId))
                    dispatch(setFollowingInProgress(userId, false))
                } else {
                    console.log('Something went wrong')
                }
            })
    }
}



