import { stopSubmit } from "redux-form"
import { userAPI } from "../API/api"

const SET_USER_DATA = 'SAMURAI-NETWORK/AUTH/SET_USER_DATA'

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

export const getMe = () => async (dispatch) => {
    let response = await userAPI.getMe()
        if (response.resultCode === 0) {
            let {id, email, login} = response.data
            dispatch(setUserData(id, email, login, true))
        }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await userAPI.login(email, password, rememberMe = false)
            if (response.resultCode === 0) {
                dispatch(getMe())
            } else {
                let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await userAPI.logout()
            if (response.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
    }
}

export default authReducer