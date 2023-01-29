import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "63052fc1-39d2-496e-872a-b5f91fbb5674"
    }
})


export const usersAPI = {
    getUsers: (currentPage:number = 1, pageSize:number = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => (res.data))
    },
    acceptFollow: (userId:number) => {
        return instance.post(`follow/${userId}`)
    },
    acceptUnfollow: (userId:number) => {
        return instance.delete(`follow/${userId}`)
    },
    getProfile: (userId:number) => {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    me: () => {
        return instance.get(`auth/me`)
    },

}
