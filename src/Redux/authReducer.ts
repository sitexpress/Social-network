

type AuthType = {
    id: string
    email: string
    login: string
    isAuth: boolean
}

const initialState = {
    id: '',
    email: '',
    login: '',
    isAuth: false
}


export const authReducer = (state:AuthType = initialState, action:setAuthUserDataACType):AuthType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


export type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (id:string, email:string, login:string) => {
    return {
        type: 'SET_USER_DATA',
        data: {id, email, login}
    } as const
}
