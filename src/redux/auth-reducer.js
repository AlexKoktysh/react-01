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
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setUserData = (data) => {
    return {
        type: SET_USER_DATA, 
        data
    }
}

export const getMe = () => {
    return (dispatch) => {
        userAPI.getMe()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserData(data.data))
                }
                })
    }
}

export default authReducer