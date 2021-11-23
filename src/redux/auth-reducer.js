import { userAPI } from "../API/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setUserData = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA, 
        payload: {id, email, login, isAuth}
    }
}

export const getMe = () => {
    return (dispatch) => {
        userAPI.getMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setUserData(id, email, login, true))
                }
                })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        userAPI.login(email, password, rememberMe = false)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getMe())
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        userAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            })
    }
}

export default authReducer