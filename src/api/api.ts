import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': '76071dac-8587-4f30-adbf-68dc70edaed2'
        }
    }
)

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postFollowUser(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)

    },
    deleteUnFollowUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)

    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfileUser(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getProfileStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    putProfileStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}