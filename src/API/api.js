import axios from "axios"

const instans = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'caf1dcf9-f1b5-4450-afec-0fd4810ca05d'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
}
)

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instans.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data    
                })
        )
    },
    deleteFollow(id) {
        return (
            instans.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
        )
    },
    postFollow(id) {
        return (
            instans.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
        )
    },
    getMe() {
        return (
            instans.get(`auth/me`)
            .then(response => {
                return response.data
            })
        )
    },
    getUserProfile(userId) {
        return (
            instans.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
        )
    },
    getStatus(userId) {
        return (
            instans.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
        )
    },
    updateStatus(status) {
        return (
            instans.put(`profile/status`, {
                status
            })
            .then(response => {
                return response.data
            })
        )
    },
    login(email, password, rememberMe) {
        return (
            instans.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            })
        )
    },
    logout() {
        return (
            instans.delete(`auth/login`)
            .then(response => {
                return response.data
            })
        )
    }
}