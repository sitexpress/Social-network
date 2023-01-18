type LocationType = {
    city:string
    country:string
}

export type UsersType = {
    id: string
    photos: string
    followed: boolean
    name: string
    status: string
    location: LocationType
}

type MainInitType = {
    users: UsersType[]
}

const initial:MainInitType = {
    users: []
}

export const usersReducer = (state:MainInitType = initial, action:MainUsersActionType):MainInitType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                    users: state.users.map(el => el.id === action.userId ? {...el, followed:true} : el)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed:false} : el)
            }
        case "SET_USERS":
            return{
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}


export type MainUsersActionType =
    followACType
    | unFollowACType
    | setUsersACType

export type followACType = ReturnType<typeof followAC>
export const followAC = (userId:string) => {
    return {type: 'FOLLOW', userId} as const
}

export type unFollowACType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId:string) => {
    return {type: 'UNFOLLOW', userId} as const
}

export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users:UsersType[]) => {
    return {type: 'SET_USERS',users} as const
}

